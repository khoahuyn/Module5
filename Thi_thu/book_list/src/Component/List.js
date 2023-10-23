import React, {useEffect, useState} from "react";
import * as bookService from "../Service/bookService"
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import ReactPaginate from 'react-paginate';



export const List=()=>{
    const[books,setBooks]=useState([]);

    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState("")

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Số mục trên mỗi trang
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
    



    useEffect(()=>{
        fetchAPI()
    },[])

    const fetchAPI=async ()=>{
        try {
            const result=await bookService.findAll();
            setBooks(result)

        }catch (e) {
            console.log(e)
        }
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    const handleDelete = (id) => {
        try {
            bookService.Delete(id)
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
            toast('🦄 Delete book successfully!!!!');
        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        const Search = () => {
            const results = books.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase()) || book.quantity.includes(search)
            );
            setSearchResults(results);
        };

        Search();
    }, [search, books]);




    const filteredBooks = books.filter(book => book.title.includes(search));



    return(
        <>
            <h1>Library <span>
                    <NavLink to="/create" className="btn btn-success">Add a new book</NavLink>
            </span></h1>

            <form>
                <input type="text" className="form-control" placeholder="Search " value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {currentItems.map(book=>(
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/update/${book.id}`} className="btn btn-primary">Update</NavLink>
                            <button onClick={e => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>




            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(filteredBooks.length / itemsPerPage) ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>


        </>
    );
}
import React, {useEffect, useState} from "react";
import axios from "axios";
import './list.css';
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";


export function Library() {
    const [books, setBooks] = useState([])
    const [searchResults, setSearchResults] = useState([]);


    const [search, setSearch] = useState("")


    useEffect(() => {
        findAll();
    }, [])


    const findAll = async () => {
        try {
            const result = await axios.get('http://localhost:8080/books')
            setBooks(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = (id) => {
        try {
            axios.delete('http://localhost:8080/books/' + id)
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



    return (
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
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>

                <tbody>

                {searchResults.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/update/${book.id}`} className="btn btn-primary">Edit</NavLink>
                            <button onClick={e => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

        </>
    );
}
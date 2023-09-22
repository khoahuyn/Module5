// import React from "react";
//
// function Remove() {
//    return undefined;
// }
//
// export class Student extends React.Component {
//    constructor() {
//       super();
//       this.state={
//          students: [
//             {
//                id: 1,
//                name: 'Khoa',
//                address: 'Da Nang',
//                age: 20
//             },
//             {
//                id: 2,
//                name: 'Nguyen Anh',
//                address: 'Quang Nam',
//                age: 19
//             },
//             {
//                id: 3,
//                name: 'Tay',
//                address: 'Quang Binh',
//                age: 25
//             },
//             {
//                id: 4,
//                name: 'Loi',
//                address: 'Ha Noi',
//                age: 23
//             },
//             {
//                id: 5,
//                name: 'Nhi',
//                address: 'TPHCM',
//                age: 22
//             }
//          ]
//       }
//
//    }
//
//
//
//
//    render(){
//       return(
//           <div>
//              <h1>Student List</h1>
//              <table border="1" style={{marginLeft:"670px"}} >
//
//                 <thead>
//                 <tr>
//                    <th>ID</th>
//                    <th>Name</th>
//                    <th>Age</th>
//                    <th>Address</th>
//                    <th>Action</th>
//                 </tr>
//                 </thead>
//
//                 <tbody>
//                 {this.state.students.map((student) => (
//                     <tr >
//                        <td>{student.id}</td>
//                        <td>{student.name}</td>
//                        <td>{student.age}</td>
//                        <td>{student.address}</td>
//                        <td><button onClick={Remove()}>Remove</button></td>
//                     </tr>
//                 ))}
//
//
//                 </tbody>
//
//              </table>
//           </div>
//       );
//    }
//
// }

import {useState} from 'react';

export function Student() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Khoa',
            address: 'Da Nang',
            age: 20,
        },
        {
            id: 2,
            name: 'Nguyen Anh',
            address: 'Quang Nam',
            age: 19,
        },
        {
            id: 3,
            name: 'Tay',
            address: 'Quang Binh',
            age: 25,
        },
        {
            id: 4,
            name: 'Loi',
            address: 'Ha Noi',
            age: 23,
        },
        {
            id: 5,
            name: 'Nhi',
            address: 'TPHCM',
            age: 22,
        }
    ]);


    const [newStudent, setNewStudent] = useState({
        name: '',
        age: '',
        address: '',
    });

    // let [newId, setNewId] = useState(1)
    // const handleId = () =>{
    //     setNewId(newId+1)
    //     console.log(newId)
    // }

    const handleRemove = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    const addList = () => {
        // Tạo một đối tượng mới với thông tin từ state newStudent
        const id=students.length+1// Tính toán ID tự tăng
        const studentToAdd = {
            id,
            ...newStudent
        };

        // Thêm đối tượng mới vào mảng students
        setStudents([...students, studentToAdd]);

        // Đặt lại giá trị của newStudent để làm sạch form
        setNewStudent({
            name: '',
            age: '',
            address: '',
        });
    };


    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        });
    };

    return (
        <div>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        value={newStudent.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        name="age"
                        value={newStudent.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        name="address"
                        value={newStudent.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={addList}>AddList</button>
            </form>

            <h1>Student List</h1>
            <table border="1" style={{marginLeft: '620px'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>
                            <button onClick={() => handleRemove(student.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}



import React from "react";

export class Student extends React.Component {
   constructor() {
      super();
      this.state={
         students: [
            {
               id: 1,
               name: 'Khoa',
               address: 'Da Nang',
               age: 20
            },
            {
               id: 2,
               name: 'Nguyen Anh',
               address: 'Quang Nam',
               age: 19
            }
         ]
      }

   }
   render(){
      return(
          <div>
             <h1>Student List</h1>
             <table border="1" style={{marginLeft:"670px"}} >

                <thead>
                <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Address</th>
                </tr>
                </thead>

                <tbody>
                {this.state.students.map((student) => (
                    <tr >
                       <td>{student.id}</td>
                       <td>{student.name}</td>
                       <td>{student.age}</td>
                       <td>{student.address}</td>
                    </tr>
                ))}


                </tbody>

             </table>
          </div>
      );
   }

}
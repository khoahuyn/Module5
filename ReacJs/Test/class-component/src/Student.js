import React from "react";

export class Student extends React.Component {
   constructor() {
      super();
      this.state={
         id:[1,2,3,4],
         name:['Tay','Tuan','Tan','Hoc'],
         age:[30,32,36,38],
         address:['Ha Noi','TPHCM','Da Nang','Hai Phong']
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
                {this.state.id.map((id, index) => (
                    <tr key={id}>
                       <td>{id}</td>
                       <td>{this.state.name[index]}</td>
                       <td>{this.state.age[index]}</td>
                       <td>{this.state.address[index]}</td>
                    </tr>
                ))}


                </tbody>

             </table>
          </div>
      );
   }

}
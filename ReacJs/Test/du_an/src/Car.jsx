import './car.css';
import React from "react";



class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            studentName:'',
            studentList:['Nguyen Van A','Nguyen Van B','Nguyen Van C']
        };
    }
    addList = () => {
        this.setState();
    }
    render() {
        return (
            <>
                <input/>
                <button onClick={addList()}/>
                </>

        );
    }
}



export default Car;
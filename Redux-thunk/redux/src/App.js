import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import {NotFound} from "./component/NotFound";
import {Home} from "./component/Home";
import UserList from "./component/UserList";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/list" element={<UserList/>}/>
                <Route path="*" element={NotFound}/>
            </Routes>
        </>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Library} from "./Component/Library";
import React from "react";
import {Route, Routes} from "react-router";
import {Create} from "./Component/Create";
import {ToastContainer} from "react-toastify";
import {Update} from "./Component/Update";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;

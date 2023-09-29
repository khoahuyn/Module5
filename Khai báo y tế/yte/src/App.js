import logo from './logo.svg';
import './App.css';
import {FormYte} from "./component/yTe";
import React from "react";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <div>
        <FormYte/>
        <ToastContainer/>
      </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import {Increase} from "./dem";



export function State() {
    const [num1,setNum1]=Increase(1);
    const [num2,setNum2]=Increase(2);
    // const [count,setCount]=useState(50);



    // useEffect(()=>{
    //     let timeId=setInterval(()=>{
    //         setCount(prevState => prevState-1);
    //     },1000)
    //
    //     console.log('Timeid',timeId);
    //
    //     if(count===0){
    //         alert("Time is up");
    //     }
    //
    //     return()=>{
    //         clearInterval(timeId);
    //     }
    // },[count])

    return(
        <>
            <h2>Count: {num1}</h2>
            <button onClick={setNum1}>Add1</button>
            <h2>Count: {num2}</h2>
            <button onClick={setNum2}>Add2</button>

            {/*<h1>Count down from {count}</h1>*/}
        </>
    );
}
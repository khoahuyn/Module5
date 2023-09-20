import React, {useEffect, useState} from "react";



export function State() {
    const [num1,setNum1]=useState(1);
    const [num2,setNum2]=useState(2);
    const [count,setCount]=useState(50);

    const addNum1=()=>{
        setNum1(num1+1);
    }

    const addNum2=()=>{
        setNum2(num2+1);
    }

    useEffect(()=>{
        let timeId=setInterval(()=>{
            setCount(prevState => prevState-1);
        },1000)

        console.log('Timeid',timeId);

        if(count===0){
            alert("Time is up");
        }

        return()=>{
            clearInterval(timeId);
        }
    },[count])

    return(
        <>
            <h2>Count: {num1}</h2>
            <button onClick={addNum1}>Add1</button>
            <h2>Count: {num2}</h2>
            <button onClick={addNum2}>Add2</button>

            <h1>Count down from {count}</h1>
        </>
    );
}
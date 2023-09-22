import React, { useState} from "react";



export function Increase() {
    const [num1,setNum1]=useState(1);
    // const [num2,setNum2]=useState(2);
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

    function useIncrease() {
        setNum1(prevState => prevState+1);
    }

    return(
        [num1,useIncrease]
    );
}
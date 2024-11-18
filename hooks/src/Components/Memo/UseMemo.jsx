import React from "react";
import { useMemo } from "react";
import { useState } from "react";




const Expendsive=()=>{
    const sum=()=>{
        console.log("Calculating Sum...");
        let i=0;
        for (i=0;i<=1000000000;i++){
            i=i+1;
        }
        return i;
    }
    // const total=sum();
    // return <p>SUM: {total}</p>


const total=useMemo(()=>sum(),[]);
    return <p>SUM: {total}</p>
}

const UseMemo = () => {
    const [count,setCount]=useState(0)
  return (
    <>
      <div>
        <Expendsive />
        <button onClick={() => setCount(count+1)}>Re-render Parent</button>
        <p>Parent rendered {count}</p>
      </div>
    </>
  );
};

export default UseMemo;

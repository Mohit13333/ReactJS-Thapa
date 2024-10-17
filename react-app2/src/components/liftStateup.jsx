import React, { useState } from 'react'

function liftStateup() {
    const [inputValue,setInputValue]=useState("")
  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponents inputValue={inputValue}/>
    </div>
  )
}


export default liftStateup

const InputComponent=({inputValue,setInputValue})=>{
    return(
        <>
        <input type="text" placeholder='enter your name' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} ></input>
        </>
    )
}

const DisplayComponents=({inputValue})=>{
    return (
        <p>The input value is:{inputValue}</p>
    )
}
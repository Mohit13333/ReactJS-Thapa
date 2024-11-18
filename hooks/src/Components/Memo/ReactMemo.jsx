import React from 'react'
import MemoCount from './MemoCount'
import { useState } from 'react'
import { useMemo } from 'react'

const ReactMemo = () => {
  const [count,setCount]=useState(0)
  const myBioData=useMemo(()=>{
  return{  name:"mohit",
    age:30,
  }
},[])
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
      </div>
      <MemoCount value={myBioData}/>
    </>
  )
}

export default ReactMemo

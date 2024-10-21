import React, { useState } from 'react'

const Index = () => {
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }

  return (
    <div className='grid place-content-center' >
      <h1>UseStet Hook!</h1>
      <p>Count: {count}</p>
      <button className='bg-black text-white rounded-md text-2xl p-1' onClick={Increment}>Increment</button>
    </div>
  )
}

export default Index

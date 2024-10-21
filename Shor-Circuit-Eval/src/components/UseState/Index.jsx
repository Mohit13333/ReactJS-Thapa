import React, { useState } from 'react'

const Index = () => {
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }

  return (
    <div>
      <h1>UseStet Hook!</h1>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Index

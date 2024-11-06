import React, { forwardRef, useId, useRef } from 'react'
import BeforeReact19 from './BeforeReact19.jsx'

const ForwardRef = () => {
    const userName=useRef(null);
    const password=useRef(null);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(userName.current.value,password.current.value);

    }
  return (
    <>
      <form className='grid grid-flow-row' onSubmit={handleFormSubmit}>
        <BeforeReact19 label="username" ref={userName}/>
        <BeforeReact19 label="password" ref={password}/>
        <button className='bg-black text-white p-2 m-2'>Submit</button>
      </form>
    </>
  )
}

export default ForwardRef

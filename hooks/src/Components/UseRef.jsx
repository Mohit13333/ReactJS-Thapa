import React, { useRef } from 'react'

const UseRef = () => {
    const userName=useRef(null);
    const password=useRef(null);
    // console.log(userName, password);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(userName.current.value, password.current.value);
    }
  return (
   <form onSubmit={handleFormSubmit}>
    <input type='text'ref={userName} className='rounded-md border-red-300 m-3 max-w-[250px]'/>
    <br/>
    <input type="password" ref={password}  className='rounded-md border-red-300 m-3 max-w-[250px]'/>
    <br/>
    <button type="submit"  className='rounded-md border-red-300 m-3 text-white p-[10px] max-w-[250px] bg-fuchsia-700'>Submit</button>
   </form>
  )
}

export default UseRef

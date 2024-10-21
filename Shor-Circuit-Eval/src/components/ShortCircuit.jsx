import React, { useState } from 'react'

const ShortCircuit = () => {
const [isLoggedIn, setIsLoggedIn] =useState(false);
const [user, setUser] = useState()
const User=()=>{
    setUser("Hello Mohit Singh")
}
  return (
    <>
    <div className="text-center">
      <h1>Welcome to shortCut evaluation</h1>
      {isLoggedIn && <p>You are logged in</p>}
      <br />
      {isLoggedIn?`User: ${user}`:"Please log in"}
      </div>
      <div className='flex justify-center'>
        <button className='bg-black text-white rounded-md text-2xl p-1 ml-2' onClick={()=>setIsLoggedIn(!isLoggedIn)} >Toggle loggin state</button>
        <button className='bg-black text-white rounded-md text-2xl p-1 ml-2' onClick={()=>User("")}>Set User</button>
        <button className='bg-black text-white rounded-md text-2xl p-1 ml-2' onClick={()=>setUser("")}>Clean User</button>
      </div>
    </>
  )
}

export default ShortCircuit

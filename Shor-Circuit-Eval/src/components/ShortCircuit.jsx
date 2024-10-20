import React, { useState } from 'react'

const ShortCircuit = () => {
const [isLoggedIn, setIsLoggedIn] =useState(false);
const [user, setUser] = useState()
const User=()=>{
    setUser("Hello Mohit Singh")
}
  return (
    <div>
      <h1>Welcome to shortCut evaluation</h1>
      {isLoggedIn && <p>You are logged in</p>}
      {isLoggedIn?`${user}`:"Please log in"}

      <div>
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)} >Toggle loggin state</button>
        <button onClick={()=>User("")}>Set User</button>
        <button onClick={()=>setUser("")}>Clean User</button>
      </div>


    </div>
  )
}

export default ShortCircuit

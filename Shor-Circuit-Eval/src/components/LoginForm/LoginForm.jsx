import React, { useState } from "react";

const LoginForm = () => {
const [user,setUser]=useState({
  email:'',
  password:''
})

const handleFormSubmit=(e)=>{
  e.preventDefault();
  console.log(user)
}

  const handleInputchange=(e)=>{
    const {name,value} = e.target;
  
    setUser((prev)=>({...prev,[name]:value}))
  }
  return (
    <form className="bg-slate-100" onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-subgrid gap-2 justify-center">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          autoComplete="off"
          value={user.email}
          onChange={handleInputchange}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
          value={user.password}
          onChange={handleInputchange}
        />
        <div>
          <button className="bg-blue-800 rounded-md p-2">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

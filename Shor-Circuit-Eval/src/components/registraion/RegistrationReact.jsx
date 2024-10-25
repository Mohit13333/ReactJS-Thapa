import React, { useState } from 'react'

const RegistrationReact = () => {
  const [user, setUser] =useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
 });

const handleInputchange=(e)=>{
  const {name,value} = e.target;

  setUser((prev)=>({...prev,[name]:value}))
}

const handleFormSubmit=(e)=>{
  e.preventDefault();
  console.log(user)
  
}
  return (
    <div>
       <form className="bg-slate-100" onSubmit={handleFormSubmit}>
        <div className="grid grid-rows-9 place-content-center">
          <h1>Signup</h1>
          <p>Create account.</p>
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
            value={user.firstName}
            onChange={handleInputchange}
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={user.lastName}
            onChange={handleInputchange}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={user.email}
            onChange={handleInputchange}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={user.password}
            onChange={handleInputchange}
          />
          <label htmlFor="PhoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="Enter your phone number"
            required
            value={user.phoneNumber}
            onChange={handleInputchange}
          />
        </div>
        <p>hello {user.email}</p>
        <p className="text-center">
          By creating an account you agree to our
          <a href="#" className="text-blue-500">
            Terms & Privacy
          </a>
        </p>
        <div className="flex justify-center mt-2">
          <button className="bg-blue-700 rounded-md text-2xl" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationReact

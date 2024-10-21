import React, { useState } from "react";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const handleFormSubmit=(e) => {
    e.preventDefault();
    const fromData={
        firstName,
        lastName,
        email,
        password,
        PhoneNumber,
    }
    console.log(fromData);
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
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <label htmlFor="PhoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {/* <p>hello {email}</p> */}
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
  );
};

export default Registration;

import React, { useState } from "react";

const ContactForm = () => {
    const [user, setUser] =useState({
        fullName: "",
        phoneNumber: "",
        message:""
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
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-subgrid gap-2 text-2xl justify-center">
          <h1 className="text-center text-2xl text-white font-bold">Contact Form</h1>
          <label htmlFor='fullName'>
            <b className="text-white" >Name</b>
          </label>
          <input type="text" name="fullName" required value={user.fullName} onChange={handleInputchange}/>
          <label htmlFor="phoneNumber">
            <b className="text-white" >Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            required
            value={user.phoneNumber}
            onChange={handleInputchange}
          />
          <label htmlFor="message">
            <b className="text-white" >Message</b>
          </label>
          <textarea
            className="w-[300px] h-[300px]"
            name="message"
            required
            value={user.message}
            onChange={handleInputchange}
          />
          <div className="flex justify-center">
            <button className="bg-blue-700 text-white rounded-md text-xl p-1 font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

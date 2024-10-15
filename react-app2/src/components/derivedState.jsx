import { useState } from "react";

const user = [
  { name: "John", age: 36 },
  { name: "mohit", age: 20 },
  { name: "ritesh", age: 18 },
];

const DerivedState = () => {
    const [user,setUser]=useState([
        { name: "John", age: 36 },
        { name: "mohit", age: 20 },
        { name: "ritesh", age: 18 },
      ])
  return (
    <div className="text-center mt-[50%] text-3xl">
      <h1>Users List</h1>
      <ul>
        {user.map((curElem, index) => {
          return <li className="p-2" key={index}>{curElem.name} {curElem.age}</li>;
        })}
      </ul>
    </div>
  );
};


export default DerivedState;
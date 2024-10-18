import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Todos = () => {
    const [inputValue,SetInputValue]=useState("");
    const [task,setTask] = useState([]);
    const [dateTime,setDateTime] = useState("")
    const handleInputChange=(value)=>{
        SetInputValue(value);
    };
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!inputValue) return;
        if(task.includes(inputValue)) {
            SetInputValue("");
            return;
        }
        setTask((prevTask)=>[...prevTask,inputValue]);
        SetInputValue("");
    }
    // todo date and time
    setInterval(()=>{
        const now =new Date();
        const format=now.toLocaleString();
        setDateTime(format);
    },1000)
    // const formatedTime=now.toLocaleTimeString();
  return (
    <div>
      <header>
        <h1 className="font-bold text-center text-3xl">Todo List</h1>
      </header>
      <h2 className="mt-3 font-bold text-center text-2xl">{dateTime}</h2>
      <section>
        <form onSubmit={handleFormSubmit} className="space-x-3 mt-12 flex justify-center">
            <div>
            <input type="text"  className="bg-gray-800 mr-0 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 p-2 leading-8 transition-colors duration-200 ease-in-out" autoComplete="off" value={inputValue} onChange={(e)=>handleInputChange(e.target.value)}/>
                <button type="submit"  className="text-white bg-indigo-500 border-0 p-2 ml-0 focus:outline-none hover:bg-indigo-600 rounded font-extrabold text-xl">Add Task</button>
                </div>
        </form>
      </section>
      <section>
        <ul className="list-none flex justify-center items-center flex-col p-4">
            {
                task.map((curTask,index)=>{
                    return <li key={index} className="mt-4 flex justify-between items-center flex- bg-zinc-800 px-4 py-2 rounded w-[320px]">
                        <span className='text-white font-extrabold p-2'>{curTask}</span>
                        <button className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"><FaCheck />
                        </button>
                        <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"><MdDelete />
                        </button>
                    </li>
                })
            }
        </ul>
      </section>
      
    </div>
  );
};

export default Todos;

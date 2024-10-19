import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Todos = () => {
    const [inputValue,SetInputValue]=useState({});
    const [task,setTask] = useState(()=>{
        const rawTodos=localStorage.getItem("reactTodo");
        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
    });
    const [dateTime,setDateTime] = useState("")
    const handleInputChange=(value)=>{
        SetInputValue({id:value,content:value,checked:false});
    };
    const handleFormSubmit=(event)=>{
        const {id,content,checked} =inputValue;
        event.preventDefault();
        if(!content) return;
        // if(task.includes(content)) {
        const ifTodoContentFind=task.find((curTask)=>curTask.content===content);
        if(ifTodoContentFind) return;
            // SetInputValue("");
            // return;
        setTask((prevTask)=>[...prevTask,{id,content,checked}]);
        // SetInputValue("");
        SetInputValue({id:"",content:"",checked:checked});
    }
    // add data to the localStorage

    localStorage.setItem("reactTodo",JSON.stringify(task));
    // todo date and time
    useEffect(()=>{
    const interval=setInterval(()=>{
        const now =new Date();
        const formatDate=now.toDateString();
        const formatTime=now.toLocaleTimeString();
        setDateTime(`${formatDate}-${formatTime}`);
    },1000)
    return ()=>clearInterval(interval)
},[]);
    // const formatedTime=now.toLocaleTimeString();


    const handleDelete=(value)=>{
        const updatedTask=task.filter((curTask)=>curTask !== value);
        setTask(updatedTask);
    }
    const handleDeleteAll=()=>{
        setTask([])
    };
    const handleCheckedTodo=(content)=>{
        const updatedTasks = task.map((curTask) => {
            if(curTask.content === content){
                return {...curTask,checked: !curTask.checked};
            }
        else{
            return curTask;
        }
        });
          
          setTask(updatedTasks);
        
    }
  return (
    <div>
      <header>
        <h1 className="font-bold text-center text-3xl">Todo List</h1>
      </header>
      <h2 className="mt-3 font-bold text-center text-2xl">{dateTime}</h2>
      <section>
        <form onSubmit={handleFormSubmit} className="space-x-3 mt-12 flex justify-center">
            <div>
            <input type="text"  className="bg-gray-800 mr-0 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 p-2 leading-8 transition-colors duration-200 ease-in-out" autoComplete="off" value={inputValue.content} onChange={(e)=>handleInputChange(e.target.value)}/>
                <button type="submit"  className="text-white bg-indigo-500 border-0 p-2 ml-0 focus:outline-none hover:bg-indigo-600 rounded font-bold text-2xl">Add Task</button>
                </div>
        </form>
      </section>
      <section>
        <ul className="list-none flex justify-center items-center flex-col p-4">
            {
                task.map((curTask)=>{
                    return <li key={curTask.id} className="mt-4 flex justify-between items-center flex- bg-zinc-800 px-4 py-2 rounded min-w-[320px]">
                        <span className={`text-white font-bold  text-2xl p-2 ${curTask.checked ? "line-through" : ""}`} >{curTask.content}</span>
                        <button className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={()=>handleCheckedTodo(curTask.content)}><FaCheck />
                        </button>
                        <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={()=>handleDelete(curTask)}><MdDelete />
                        </button>
                    </li>
                })
            }
        </ul>
        <section className="flex items-center justify-center ">
            <button className="bg-red-900 text-white p-2 text-2xl font-bold" onClick={handleDeleteAll}>Clear All</button>
        </section>
      </section>
      
    </div>
  );
};

export default Todos;

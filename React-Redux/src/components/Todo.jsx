import { FiTrash2, FiPlus } from "react-icons/fi";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store/Store";

const Todo = () => {
    const [task,setTask]=useState("")
  const state = useSelector((state) => state.task);
  const dispatch=useDispatch();
  const handleFormSubmit=()=>{
    dispatch(addTask(task));
    return setTask('')
  }

  const handleDeleteTask=(index)=>{
    dispatch(deleteTask(index))
  }
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        To-Do List
      </h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
        onClick={handleFormSubmit}
        type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          title="Add Task"
        >
          <FiPlus className="text-xl" />
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {state.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-2 hover:bg-gray-100 transition duration-300 rounded"
          >
            <span className="text-gray-800">
              {index}: {task}
            </span>
            <button
                onClick={() => handleDeleteTask(index)}
              className="text-red-500 hover:text-red-700 transition duration-300"
              title="Delete Task"
            >
              <FiTrash2 className="text-xl" />
            </button>
          </li>
        ))}
      </ul>

      {state.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No tasks! Add some to get started.
        </p>
      )}
    </div>
  );
};

export default Todo;

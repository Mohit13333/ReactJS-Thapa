import { createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"

const ADD_TASK="task/add";
const DELETE_TASK="task/delete";
const initialState={
    task:[],
    isLoading:false
}
const taskreducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task:[...state.task,action.payload],
            }
    
        case DELETE_TASK:
            const updateTask=state.task.filter((curTask,index)=>{
                return index != action.payload;
            })
            return {
                ...state,
                task:updateTask,
            }
    
        default:
           return state;
    }
}

// create rdux store
const store=createStore(taskreducer,composeWithDevTools());

const addTask=(data) => {
    return {type: ADD_TASK, payload: data}
}

const deleteTask=(id)=>{
  return {type: DELETE_TASK, payload:id}
}


store.dispatch(addTask("Mohit singh"))
store.dispatch(addTask("Mohit singh Bhumihar"))
store.dispatch(addTask("Mohit"))
store.dispatch(addTask("Mohit singhaniya"))

store.dispatch(deleteTask(0))


export {store,addTask,deleteTask}
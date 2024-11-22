import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension"
import {thunk} from "redux-thunk"

const ADD_TASK="task/add";
const DELETE_TASK="task/delete";
const FETCH_TASK="task/fetch";
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
            };
    
        case DELETE_TASK:
            const updateTask=state.task.filter((curTask,index)=>{
                return index != action.payload;
            })
            return {
                ...state,
                task:updateTask,
            };
            case FETCH_TASK:
                return {
                    ...state,
                    task:[...state.task,...action.payload]
                }
    
        default:
           return state;
    }
}

// create rdux store
const store=createStore(taskreducer,composeWithDevTools(applyMiddleware(thunk)));

const addTask=(data) => {
    return {type: ADD_TASK, payload: data}
}

const deleteTask=(id)=>{
  return {type: DELETE_TASK, payload:id}
}
const fetchTask=()=>{
    return async (dispatch)=>{
        try {
            const res= await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const data =await res.json();
            dispatch({type: FETCH_TASK, payload:data.map((curTask)=>
                curTask.title
            )})
        } catch (error) {
            console.log(error)
        }
    }
}


store.dispatch(addTask("Mohit singh"))
store.dispatch(addTask("Mohit singh Bhumihar"))
store.dispatch(addTask("Mohit"))
store.dispatch(addTask("Mohit singhaniya"))
// store.dispatch(fetchTask('G'))

store.dispatch(deleteTask(0))


export {store,addTask,deleteTask,fetchTask}
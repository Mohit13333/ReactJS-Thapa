import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
    isLoading: false,
  };
const taskReducer=createSlice({
    name: 'task',
    initialState,
    reducers:{
        addTask(state,action){
            state.task.push(action.payload);
            // state.task= [...state.task, action.payload];
        },
        deleteTask(state,action){
            state.task=state.task.filter((curTask,index)=> index!=action.payload)
        }
    }

})
// console.log(taskReducer)
const {addTask,deleteTask}=taskReducer.actions

export {addTask,deleteTask,taskReducer}
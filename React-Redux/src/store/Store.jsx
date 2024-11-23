// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../features/taskSlice";

// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";
// const initialState = {
//   task: [],
//   isLoading: false,
// };
// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };

//     case DELETE_TASK:
//       const updateTask = state.task.filter((curTask, index) => {
//         return index != action.payload;
//       });
//       return {
//         ...state,
//         task: updateTask,
//       };
//     case FETCH_TASK:
//       return {
//         ...state,
//         task: [...state.task, ...action.payload],
//       };

//     default:
//       return state;
//   }
// };

//!(Old Style) create rdux store
// const store = createStore(
//   taskrReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// ? RTK Slice

// const taskReducer=createSlice({
//     name: 'task',
//     initialState,
//     reducers:{
//         addTask(state,action){
//             state.task.push(action.payload);
//             // state.task= [...state.task, action.payload];
//         },
//         deleteTask(state,action){
//             state.task=state.task.filter((curTask,index)=> index!=action.payload)
//         }
//     }

// })
// // console.log(taskReducer)
// const {addTask,deleteTask}=taskReducer.actions

// !New Style Redux TOOLKIT
const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
});

// const addTask = (data) => {
//   return { type: ADD_TASK, payload: data };
// };

// const deleteTask = (id) => {
//   return { type: DELETE_TASK, payload: id };
// };
// const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       const data = await res.json();
//       dispatch({
//         type: FETCH_TASK,
//         payload: data.map((curTask) => curTask.title),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export { store };

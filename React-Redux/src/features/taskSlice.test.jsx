import { store } from "../store/Store";
import { addTask, deleteTask } from "./taskSlice";

store.dispatch(addTask("Mohit singh"));
store.dispatch(addTask("Mohit singh Bhumihar"));
store.dispatch(addTask("Mohit"));
store.dispatch(addTask("Mohit singhaniya"));
// store.dispatch(fetchTask('G'))

store.dispatch(deleteTask(0));
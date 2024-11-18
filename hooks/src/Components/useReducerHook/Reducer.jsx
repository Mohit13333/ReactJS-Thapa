import React from "react";
import { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };
  const reducer = (state, action) => {
    // if(action.type === 'INCREMENT'){
    //     return state+1;
    // }else if(action.type === 'DECREMENT'){
    //     return state-1
    // }else if(action.type === 'RESET'){
    //     return state=0
    // }
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + state.inc,
        };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - state.dec,
        };

      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </>
  );
};
export default Reducer;

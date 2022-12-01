import { Action } from "history";
import React, { useReducer } from "react";

//useReducer hook uses the same concept as the reducers in redux
//it is basically a pure component with no side-effects
//a function  is considered pure,if it adheres to the following rules
//a function always returns teh same output if same arguments are passed in
//the function does not produce side-effects
//it is used for handling multiple states

const initialState = 0;
const reduce = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <div>
      {/* dispatch is used to trigger the action*/}
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}></button>
    </div>
  );
};

export default UseReducer;
//--------------------------------------
import React from 'react'
const reduce=(state,action)=>{
  if(action.type=="INCREMENT")
  return state+1
  if (action.type === "DECREMENT") {
    return state - 1;
  }
}
const UseReducer = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      
    </div>
  )
}

export default UseReducer


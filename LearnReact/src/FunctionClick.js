import { render } from "@testing-library/react";
import React from "react";
const FunctionClick = () => {
  const clickHandler = () => {
    //or function clickHandler()
    console.log("Click me");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
export default FunctionClick;

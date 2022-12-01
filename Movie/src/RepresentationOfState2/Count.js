import React, { useState, useEffect } from "react";
const Count = () => {
  const [counter, setCounter] = useState(0);
  //never modify state manually only modify through it setSate

  useEffect(() => {
    alert("You changed the counter to" + counter);
  }, [counter]); //agar useEffect ko bs pehli baar bulana hota tab [] empty array de dete
  return (
    <>
      <button
        onClick={() => {
          setCounter((prevCount) => prevCount - 1);
        }}
      >
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </>
  );
};
export default Count;

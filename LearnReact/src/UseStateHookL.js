import React, { useState } from "react";

const UseStateHookL = () => {
  const [myName, setMyName] = useState("Samiksha");
  const changeName = () => {
    // if (myName == "Samiksha") setMyName("samiksha sahu");
    // else setMyName("Samiksha");
    // or
    let val = myName;
    if (val === "Samiksha") setMyName("samiksha sahu");
    else setMyName("Samiksha");
  };
  return (
    <div>
      {myName}
      <button onClick={changeName}>Click Me</button>
    </div>
  );
};

export default UseStateHookL;

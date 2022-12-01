import React, { useState } from "react";

function HookCountertwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {" "}
        increment{" "}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        {" "}
        decrement{" "}
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}
export default HookCountertwo;

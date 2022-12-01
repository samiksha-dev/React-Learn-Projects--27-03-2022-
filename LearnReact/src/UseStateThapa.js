import React, { useState } from "react";

// function UseStateThapa() {
//   console.log(useState()); //Array(2)
//   //   0: undefined
//   //   1: ƒ (
//   const [name, setName] = useState("Samiksha");
//   const clickHandler = () => {
//     // if (name === "Samiksha") setName("Sahu");
//     // else setName("Samiksha");
//     //or
//     name === "Samiksha" ? setName("sahu") : setName("Samiksha");
//   };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={clickHandler}>Click Me</button>
//     </div>
//   );
// }

// export default UseStateThapa;
//-------------------REVISION---------------------------------
const UseStateThapa = () => {
  const [name, setName] = useState("");
  const changeName = () => {
    name === "samiksha" ? setName("samiksha sahu") : setName("samiksha");
  };
  return (
    <div>
      {name}
      <button onClick={changeName}></button>
    </div>
  );
};
export default UseStateThapa;

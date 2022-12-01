// import React, { useState } from "react";

// const UseStaeObject = () => {
//   const [myObject, setmyObject] = useState({
//     myName: "Samiksha",
//     qual: "B.tech",
//     age: 25,
//   });
//   const updateObject = () => {
//     setmyObject({ ...myObject, myName: "Shashwat" });
//   };

//   return (
//     <div>
//       <h1>
//         Name:{myObject.myName} qualification:{myObject.qual} age:{myObject.age}
//       </h1>
//       <button onClick={updateObject}>Update</button>
//     </div>
//   );
// };

// export default UseStaeObject;
//----------------REVISION--------------------------------------------------------------------------
import React, { useState } from "react";

const UseStaeObject = () => {
  const ide = {
    name: "Samiksha",
    sname: "sahu",
  };
  const updateName = () => {
    object.name === "Samiksha"
      ? setObject({ ...object, name: "Shashwat" })
      : setObject({ ...object, name: "Samiksha" });
  };
  const [object, setObject] = useState(ide);
  return (
    <div>
      {object.name + " " + object.sname}
      <button onClick={updateName}></button>
    </div>
  );
};
export default UseStaeObject;

// // import React, { useState } from "react";

// // const UseStateArray = () => {
// //   const bioData = [
// //     {
// //       id: 1,
// //       name: "Samiksha",
// //       snam: "Sahu",
// //     },
// //     {
// //       id: 2,
// //       name: "Neelam",
// //       sname: "Sahu",
// //     },
// //     { id: 3, name: "Shashwat", sname: "Sahu" },
// //   ];
// //   //now if we want to clear it so if we do clearArray=()=>{bioData=[]} first of all we will get an array as bioData is constant
// //   //we cant change it now if we did var bioData it will not re-render the component here comes usState
// //   return (
// //     <div>
// //       {bioData.map((currEleme) => (
// //         <h1>
// //           Name {currEleme.name} Sname:{currEleme.sname}
// //         </h1>
// //       ))}
// //     </div>
// //   );
// // };

// // export default UseStateArray;

// import React, { useState } from "react";

// const UseStateArray = () => {
//
//   const [array, setarray] = useState(bioData);
//   const clearArray = () => {
//     setarray([]);
//   };
//   return (
//     <div>
//       {array.map((items) => (
//         <h1 key={items.id}>
//           Name:{items.name} Sname:{items.sname}
//         </h1>
//       ))}
//       <button onClick={clearArray}>Clear</button>
//     </div>
//   );
// };

// export default UseStateArray;

// //---------------------------------REVISION--------------------------------------------------------------------

import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      name: "Jainendra Kumar",
      sname: "Sahu",
    },
    {
      name: "Neelam",
      sname: "Sahu",
    },
    {
      name: "Samiksha",
      sname: "sahu",
    },
    {
      name: "shashwat",
      sname: "sahu",
    },
  ];

  const [items, setItems] = useState(bioData);
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");

  const clearArray = () => {
    setItems([]);
  };
  const addItem = (e) => {
    setItems([...items, { name, sname }]);
    setName("");
    setSname("");
  };
  return (
    <div>
      {items.map((item) => {
        return <h1>{item.name + " " + item.sname}</h1>;
      })}
      <button onClick={clearArray}></button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Name"
        />
        <input
          type="text"
          value={sname}
          onChange={(e) => setSname(e.target.value)}
          placeholder="surname"
        />
        <button onClick={addItem}>Add Items </button>
      </div>
    </div>
  );
};
export default UseStateArray;

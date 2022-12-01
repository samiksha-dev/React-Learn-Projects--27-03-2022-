import React, { useState } from "react";

const BasicToDo = () => {
  const bioDate = [
    {
      key: 0,
      name: "Jainendra",
      sname: "Sahu",
    },
    {
      key: 1,
      name: "Neelam",
      sname: "Sahu",
    },
    {
      key: 2,
      name: "Samiksha",
      sname: "Sahu",
    },
    {
      key: 3,
      name: "Shashwat",
      sname: "Sahu",
    },
  ];
  const [array, setarray] = useState(bioDate);
  const clearArray = () => {
    setarray([]);
  };
  const removeElement = (id) => {
    const myNewArray = array.filter((currEle, index) => {
      return index != id;
    });
    setarray(myNewArray);
  };
  return (
    <div>
      {array.map((items, index) => (
        <h1>
          Name :{items.name} sname:{items.sname}
          {/* <button onClick={removeElement(items.id)}>Remove</button> */}
          {/* aise kia toh remove Element har baar call hota rahega */}
          <button onClick={() => removeElement(index)}>Remove</button>
        </h1>
      ))}

      <button onClick={clearArray}>Clear array</button>
    </div>
  );
};

export default BasicToDo;

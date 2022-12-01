import React, { useState, useEffect } from "react";
//to get data from local storage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const UpdatedToDoThapa4 = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  //const [items, setItems] = useState([]);
  const addItem = () => {
    if (data) {
      setItems([...items, data]);
      setData("");
    }
  };
  const deleteItem = (key) => {
    const newItem = items.filter((currEle, index) => {
      return index != key;
    });
    setItems(newItem);
  };
  const removeAll = () => {
    setItems([]);
  };

  //add data to local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]); //jb bhi items ki value change ho tb yeh chale
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add Items"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={addItem}>+</button>
      </div>
      <div>
        {items.map((ele, index) => {
          return (
            <div key={index}>
              <h3>{ele}</h3>
              <button onClick={() => deleteItem(index)}>-</button>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={removeAll}>Remove</button>
      </div>
    </>
  );
};

export default UpdatedToDoThapa4;

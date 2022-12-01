import React from "react";

const Uncontrolled = () => {
  //for uncontrolled componenst we use useRef but no re-rendering of component
  //useRef also preserves state but
  const name = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name.current);
    console.log(name.current.value);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" ref={name}></input>
        </div>
      </form>
    </div>
  );
};

export default Uncontrolled;

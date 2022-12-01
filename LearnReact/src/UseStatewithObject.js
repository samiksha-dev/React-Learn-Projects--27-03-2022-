import React, { useState } from "react";

function UseStatewithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <h2>Your first name is {name.firstName}</h2>
      <h2>Your last name is {name.lastName}</h2>
      {/* but now if you see in browser whenevr you start typing last name first name will disappear since useState does not automatically merge  and update the objects */}
      {/* therefore do ...name */}
    </div>
  );
}
export default UseStatewithObject;

import React from "react";
import Person from "./Person";

function List() {
  // const names = ["Neelam", "Samiksha", "Shashwat"];
  // const nameList = names.map((names, index) => (
  //   <h2 key={index}>
  //     {index}
  //     {names}
  //   </h2>
  // ));
  const names = ["Neelam", "Samiksha", "Shashwat"];
  return (
    <div>
      {names.map((name) => (
        <h2>{names}</h2>
      ))}
    </div>
  );
}

export default List;

import React from "react";

function Person({ user }) {
  return (
    <div>
      <h2>
        I am {user.firstName} {user.lastName} with age {user.age}
      </h2>
    </div>
  );
}
export default Person;

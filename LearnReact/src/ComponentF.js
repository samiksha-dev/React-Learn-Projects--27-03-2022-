import React from "react";
import { UserConsumer } from "./Context";

const ComponentF = () => {
  return (
    <UserConsumer>
      {({ username }) => {
        return <div>Helloe {username}</div>;
      }}
    </UserConsumer>
  );
};

export default ComponentF;

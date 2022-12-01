import React, { useState, useEffect } from "react";
//fetch api return data in form of promises
const UseEffectAPIThapa = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    // const response = await fetch("https://api.github.com/users");
    // const data = await response.json();
    // console.log(data);
    // setUsers(data);
    //for error handling
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("my error is" + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []); //taaki bas pehli baar chale
  return (
    <div>
      <h2>List of Users</h2>
      {users.map((currEle) => {
        return (
          <>
            <h1>{currEle.login}</h1>
          </>
        );
      })}
    </div>
  );
};

export default UseEffectAPIThapa;

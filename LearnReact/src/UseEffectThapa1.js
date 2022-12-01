//lets us perform side effects in function components
//side effects are basically anything that affects something outside of the scope of the currentt function that beings executed
//eg. API Request to our backend
//calls to oyr authentication service
//error tracking
//data fetching

//you can think of useEffect as componentDidMount,componentDidUpdate and componentWillUnmount combined
//when page is refreshed 1st time useEffect is automatically called
//and we know jab jab useState call ho ta hai page re-render hota eg count incremenmt
import React, { useEffect, useState } from "react";

const UseEffectThapa1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("useEffect called");
    // document.title = `Chats (${count})`;
    //CHALLENGE Display count only if count>=1
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else document.title = `Chats`;
  });
  console.log("Hello outside"); //pehle yeh console hoga phir useEffect ke andar waala
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>incremenmt</button>
      {/* toh jb jb increement kroge page reload hoga aur useState chalega */}
    </div>
  );
};

export default UseEffectThapa1;

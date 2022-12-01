import React, { useState, useEffect } from "react";

const UseEffectDependencyListThapa2 = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     document.title = `Chats (${count})`;
  //   }, []);
  //[] this is a dependency list matlab ek empty array de di mtlb bs 1 hi baar useEffect chalega
  //humne jaise dekha tha useState ki wjh se baar baar useEffect chal raha tha ab aise nahi hoga
  //ab useEffect kyu chal rha tha dobara since hum count increment kr rhe the toh hum kya kr skte hai [count] aise paas kr do
  //toh tab tab chalega jab jab count ki value change hogi
  useEffect(() => {
    console.log("Hello");
    document.title = `Chats (${count})`;
  }, [count]);
  //we can have multiple useEffect
  useEffect(() => {
    console.log("I amfine");
  }, []);
  console.log("outside"); //pehle yeh chalega phir upar waala useEffect phir 2nd waala

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 5)}></button>
    </div>
  );
};

export default UseEffectDependencyListThapa2;

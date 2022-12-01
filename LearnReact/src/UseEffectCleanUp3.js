import React, { useState, useEffect } from "react";

// const useEffectCleanUp3 = () => {
//   const [width, setWidth] = useState(window.screen.width);
//   const actualWidth = () => {
//     console.log(window.innerWidth);
//     setWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", actualWidth);
//     return () => {
//       //this is cleanup
//       //  The correct explanation is that it first removes the old added listener from CleanUp function and adds the new listener.
//       window.removeEventListener("resize", actualWidth);
//     };
//   });
//   return <div>width:{width}</div>;
// };

const useEffectCleanUp3 = () => {
  const [width, setWidth] = useState(window.screen.width);
  const actualWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  });
  return <div>Width:{width}</div>;
};
export default useEffectCleanUp3;

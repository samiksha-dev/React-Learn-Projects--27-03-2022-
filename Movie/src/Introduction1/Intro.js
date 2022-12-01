import React from "react";

export const Intro = () => {
  const name = "Samiksha";
  const isNameShowing = "true";
  return (
    <>
      <h1>Hello {name}!</h1>
      <h1>is Name visble {isNameShowing ? name : ""}</h1>
      {name ? ( //tum name ko null kr dete toh : iske baad waali condition print ho jaati
        <>
          <h1>Good Morning</h1>
        </>
      ) : (
        <>test</>
      )}
    </>
  );
};
// export default Intro;

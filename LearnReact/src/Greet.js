import React from "react";
// const Greet = (props) => {
//   return (
//     <div>
//       My name is {props.name} a.k.a {props.heroName}
//     </div>
//   );
// };

//destructuring
//M-1
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       My name is {name} a.k.a {heroName}
//     </div>
//   );
// };

//M-2
const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      My name is {name} a.k.a {heroName}
    </div>
  );
};

export default Greet;

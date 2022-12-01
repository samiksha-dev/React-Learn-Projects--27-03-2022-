// import React, { useState } from "react";

// const BasicForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [allEntry, setallEntry] = useState([]);
//   const submitForm = (e) => {
//     if (email && password.length > 6) {
//       e.preventDefault();
//       const newEntry = {
//         id: new Date().getTime.toString,
//         email,
//         password,

//         //or(since ley value pair is same)
//         //email: email,
//         // password: password,
//       };
//       setallEntry([...allEntry, newEntry]);
//       console.log(allEntry);
//       setEmail("");
//       setPassword("");
//     } else {
//       alert("Pls fill the data");
//     }
//   };
//   return (
//     <form onSubmit={submitForm}>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="off"
//         />
//         <label htmlFor="password">Password</label>

//         <input
//           type="password"
//           value={password}
//           autoComplete="off"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//       <div>
//         {/* {allEntry.map((currEle) => {
//           return (
//             <h1 key={currEle.id}>
//               {currEle.email} {currEle.password}
//             </h1>
//           );
//         })} */}
//         {/* OR */}
//         {allEntry.map((currElem) => {
//           const { id, email, password } = currElem;
//           return (
//             <h1 key={id}>
//               {email} {password}
//             </h1>
//           );
//         })}
//       </div>
//     </form>
//   );
// };

// export default BasicForm;

import React from ".react";
const BasicForm = () => {
  const [email, setEmail] = useState("");
  constr[(password, setPassword)] = useState("");
  const [allEntry, setallEntry] = useState([]);
  const submitForm=(e)=>{
if(password.length>6 &&email){
  const newEntry={
    id:Math.trunc(Math.random());
    email,
    password
  }
  setallEntry([...allEntry,newEntry]);
  setEmail("");
  setPassword("")
}
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          onChange={() => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
};

import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([]);
  const submit = () => {
    if (email && password.length > 6) {
      const newEntry = {
        key: new Date().getTime.toString,
        email,
        password,
      };
      setallEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChage={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit"> Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

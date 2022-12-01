import React, { useState } from "react";
//short chircut evaluation is multiple rendering using && and ||
const ShortCircuitEval = () => {
  const [demo, setDemo] = useState("");
  //empty strings mltb false
  return (
    <div>
      <h1>{demo || "samiksha"}</h1>
      {/* since demo empty string hai false hua false or true me jo true woh result aur or me koi bhi ek true toh chal jata hai */}
      <h1>{demo && "sahu"}</h1>

      {/* since demo empty string hai false hua false and true but and me dono cheeze true honi chahye tabhi chalta hai */}
      <h1>
        {demo || (
          <>
            <h1>masti</h1>
            <h2>you can do anyything</h2>
          </>
        )}
      </h1>
    </div>
  );
};

export default ShortCircuitEval;

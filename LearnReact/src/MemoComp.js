import React from "react";
function MemoComp({ name }) {
  console.log("Memo Comp called");
  return <div>{name}</div>;
}
export default React.memo(MemoComp);

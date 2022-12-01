import React from "react";
import "./mystylesheet.css";

const Stylesheet = (props) => {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${className} font-xl`}>Stylesheet</h2>
      {/* //since classname is a variable name islye humne usse template literal bana ke daala */}
    </div>
  );
};

export default Stylesheet;

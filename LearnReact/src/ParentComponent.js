import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";
class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent() {
    alert(`hello ${this.state.parentName}`);
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.greetParent}>Greet Parent</button> */}
        <ChildrenComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;

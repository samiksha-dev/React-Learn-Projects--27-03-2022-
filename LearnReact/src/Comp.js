import React, { Component } from "react";

class Comp extends Component {
  render() {
    console.log("**************** Component*************");
    return (
      <div>
        Regular Component
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default Comp;

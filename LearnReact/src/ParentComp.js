import React, { Component } from "react";
import Comp from "./Comp";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Samiksha",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Samiksha",
      });
    }, 2000);
  }
  render() {
    console.log("**************** Parent Component*************");
    return (
      <div>
        ParentComp
        {/* <Comp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
export default ParentComp;

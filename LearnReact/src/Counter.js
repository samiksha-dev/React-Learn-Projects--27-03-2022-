import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "red",
    };
  }
  increment = () => {
    this.setState(
      {
        count: this.state.count + 1,
        color: this.state.color == "red" ? "blue" : "red",
      },
      () => {
        console.log(this.state.count);
      }
    );
    console.log("value", this.state.count);
  };
  render() {
    return (
      <div>
        Count-{this.state.count}
        <button
          onClick={() => this.increment()}
          style={{ backgroundColor: this.state.color }}
        ></button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";
class setDemo extends Component {
  constructor() {
    super();
    this.state = {
      message: "Good Morning",
    };
  }
  changeMessage = () => {
    this.setState({
      message: "Good Night",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}></button>
      </div>
    );
  }
}
export default setDemo;

import React, { Component } from "react";
class ClassC extends Component {
  constructor() {
    super(); //this method is required since we extend React's Component class and a call has to be made to the base class constructor
    this.state = {
      message: "Welcome Samiksha",
    };
  }
  changeMessage() {
    this.setState({
      //setState is a method which takes object
      message: "You can do it",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Motivation</button>
      </div>
    );
  }
}
export default ClaasC;

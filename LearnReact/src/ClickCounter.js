import React, { Component } from "react";
import Comp from "./Comp";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.increment}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;

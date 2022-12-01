import React, { Component } from "react";

class Hover extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
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
        <h1 onMouseOver={this.increment}> Increment {count}</h1>
      </div>
    );
  }
}

export default Hover;

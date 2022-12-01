import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samiksha",
    };
    console.log("LifecycleA constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStatefromprops called");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA component did mount called");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate  called");
    return true;
  }
  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log("LifecycleA getSnapshotBeforeUpdate  called");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate  called");
  }
  changeSate = () => {
    this.setState({
      name: "samiksha",
    });
  };
  render() {
    console.log("LifecycleA render method called");
    return (
      <div>
        LifecycleA
        <button onClick={this.changeSate}>LifecycleMethod</button>
        <LifeCycleB />
      </div>
    );
  }
}
export default LifecycleA;

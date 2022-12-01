import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Samiksha",
    };
    console.log(" LifeCycleB constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" LifeCycleB getDerivedStatefromprops called");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB component did mount called");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate  called");
    return true;
  }
  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log("LifeCycleB getSnapshotBeforeUpdate  called");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate  called");
  }

  render() {
    console.log("LifeCycleB render method called");
    return <div>LifeCycleB</div>;
  }
}
export default LifeCycleB;

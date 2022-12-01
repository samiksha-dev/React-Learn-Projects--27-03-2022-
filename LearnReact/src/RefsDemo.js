import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.cbrf = null; //step-1
    this.setcbrf = (element) => {
      //step 2 assigning a dom element to the cbrf created in step 1
      this.cbrf = element;
    };
  }
  componentDidMount() {
    //step-4
    if (this.cbrf) {
      //since react with call the callback ref with the dom element when component mounts and call it with null when it unmounts
      //therefore it i =s imo to check if(this.cbrf)
      this.cbrf.focus(); //so se we dont need current
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        {/* step 3 attaching ref  */}

        <input type="text" ref={this.setcbrf} />

        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default RefsDemo;

//what is event handler binding
// The key point I missed out on was that a method that is defined inside a class loses its context when it is
// reassigned.

// So when we do,

// <SomeComponent onClick={eventHandler} />
// the eventHandler is reassigned to some other variable and is called internally by react. Because of this
//reassignment,
//the eventHandler will lose its context and when called by react internally, it wont have this.

// To explicitly bind this to the eventHandler so that it doesn't lose its context even after reassigning, we do:

import React, { Component } from "react";

// class EventBind extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hi",
//     };
//   }
//   clickHandler() {
//     // this.setState({
//     //   message: "Good Morning",
//     // });
//     console.log(this); //output-undefined
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.clickHandler}> Click</button>
//       </div>
//     );
//   }
// }
//giver error
//TypeError: Cannot read properties of undefined (reading 'setState')
//note this keyword is undefined in event handlers and that is the reason event binding is necessary in class component
//why it happens
// The clickHandler() method seems to have lost its context (component instance) or this value
// the event handler method loses its implicitly bound context. When the event occurs and the handler is
//  invoked, the this value falls back to default binding and is set to undefined ,
//  as class declarations and prototype methods run in strict mode.

//Method-1sol.-but by this method the component re-renders everytime a new update is done,this in result will generate a brand new event handler everytime
//it can be problematic in large applications especially components that contains nested children components
// class EventBind extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Hi",
//     };
//   }
//   clickHandler() {
//     this.setState({
//       message: "Good Morning",
//     });
//     console.log(this); //output-EventBind
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.clickHandler.bind(this)}> Click</button>
//       </div>
//     );
//   }
// }

//Method-2-Arrow functions
//Arrow functions are exempt from this behavior because they use lexical this binding which
//automatically binds them to the scope they are defined in.
// class EventBind extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "Hii",
//     };
//   }
//   clickHandler() {
//     this.setState({
//       message: "Good Morning",
//     });
//     console.log(this);
//   }
//   render() {
//     return (
//       <div>
//         <hi>{this.state.message}</hi>
//         <button onClick={() => this.clickHandler()}>Click</button>//see we are calling clickHandler()
//       </div>
//     );
//   }
// }

//Approach-3binding in constructor

// class EventBind extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "Hii",
//     };
//     this.clickHandler = this.clickHandler.bind(this);
//   }
//   clickHandler() {
//     this.setState({
//       message: "Good Morning",
//     });
//     console.log(this);
//   }
//   render() {
//     return (
//       <div>
//         <hi>{this.state.message}</hi>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }

//Approach 4-class property approach
class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hii",
    };
  }
  clickHandler = () => {
    this.setState({
      message: "Good Morning",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <hi>{this.state.message}</hi>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

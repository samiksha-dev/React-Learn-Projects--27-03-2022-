import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
    };
  }
  componentDidMount() {
    //since we want the data initially on the class render hence we will call the fetchAdvice here
    this.fetchAdvice();
  }
  //we dont have to write const fetchAdvice=()=> since it is a function inside a class hence it becomes a method
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        //console.log(response.data.slip.advice);
        //or
        const { advice } = response.data.slip;
        console.log(advice);
        //this.setState({ advice: advice });
        //or since key value pair is same
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button">
            <span>Give me advice</span>
          </button>
        </div>
      </div>
    ); //if we try to access advice here that we got in function we will not be able to do so since
    //it has functional scope hence we will use setState
  }
}

export default App;

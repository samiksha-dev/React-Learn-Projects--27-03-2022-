import React, { Component } from "react";

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "react", //initially maan lo react hai
      password: "",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value, //this will help in capturing the value
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      !RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$").test(this.state.password)
    )
      return alert(
        `${this.state.userName} ${this.state.comments} ${this.state.topic}`
      );
    //to prevent refreshing of page after submission
  };
  render() {
    //const{username,comments,topic}=this.state//destructuring taaki baar baar this.state neeche na likha pade
    //ab neeche se chaaho toh this.state.username hata ke sirf username likh skte ho
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          ></input>
        </div>
        <div>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          >
            Password
          </input>
        </div>
        <div>
          <lable>Comments</lable>
          <textarea
            type="text"
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label value={this.state.topic} onChange={this.handleTopicChange}>
            <select>
              <option value="react"> React</option>
              <option value="angular"> Angular</option>
              <option value="vue"> Vue</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form1;

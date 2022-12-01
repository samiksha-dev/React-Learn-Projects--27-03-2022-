import React, { Component } from "react";
class Form2 extends React {
  constructor() {
    super();
    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          >
            Comments
          </textarea>
        </div>
        <div>
          <label value={this.state.topic} onChange={this.handletopicChange}>
            <select>
              <option value="react">React</option>
              <option value="react">Angular</option>
              <option value="react">Vue</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

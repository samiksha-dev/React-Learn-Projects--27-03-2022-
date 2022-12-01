import React, { Component } from "react";
import axios from "axios";

class HTTPDemo extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  //componentDidMount will execute only when components mount and runs only once
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length}?posts.map((post)=>return(
        <div key={post.id}>{post.title}</div>)):null
      </div>
    );
  }
}

export default HTTPDemo;

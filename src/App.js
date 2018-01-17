import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <Author author={this.props.allAuthors} />
        
        <p>{this.props.body}</p>
        <h3>Comments:</h3>
        <p>{this.props.comments.map( things => <p>{things}</p>)}</p>
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div className="Authors">
       <h2> {this.props.author.map( authors => <p>{authors}</p>)}</h2>
      </div>

    );
  }
}

export default Post;

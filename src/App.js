import React, { Component } from 'react';
import logo from './logo.svg';
import Author from './Author.js';
import Comment from './Comment.js';
import './App.css';

class Post extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
      return <div> {/* div needs to be on same line as return statment */}
          <div className="Post">
            <h1 className="Title">{p.title}</h1>
            <Author author={p.author}/> 
            <p className="Post-intro">{p.body}</p>
            <h3>Comments:</h3>
            <Comment comments={p.comments} />
          </div>
        </div>
    });
    return (

      <div> {allPosts} </div>
    );
  }
}



export default Post;

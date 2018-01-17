import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
	title: "Dinosaurs are awesome",
	author:[
	"Stealthy Stegosaurus", 
	"Body Builder", 
	"Doug McDougall"
	],
	body: "Check out this body property!",
	comments: [
	"First!", 
	"Great post", 
	"Hire this author now!"]
}


ReactDOM.render(<Post title={post.title} allAuthors={post.author} body={post.body} comments={post.comments}/>, document.getElementById('root'));

registerServiceWorker();


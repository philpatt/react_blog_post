import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
	title: "Dinosaurs are awesome",
	author:"Stealthy Stegosaurus",
	body: "Check out this body property!",
	comments: [
	"First!", 
	"Great post", 
	"Hire this author now!"]
}]

ReactDOM.render(<Post posts={posts}/>, document.getElementById('root'));




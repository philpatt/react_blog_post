import React, { Component } from 'react';

class Comment extends Component {
	render(){
	{/* define comments below to return allCommentse*/}
		const allComments = this.props.comments.map(c => { 
			return <p>&lsquo;{c}&rsquo;</p>
		});
		return(
			<div>{allComments} </div>
		);
	}
}

export default Comment;
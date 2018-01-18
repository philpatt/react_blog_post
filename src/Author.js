import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Author extends Component {
	propTypes() {
   author: React.PropTypes.number
  }
  render() {
    return (
      <div className="Authors">
       <em> {this.props.author}</em>
      </div>

    );
  }
}
export default Author;
import React from 'react';
import { connect } from 'react-redux';
 
class CommentItem extends React.Component {

  render() {  
    debugger
    return (
      <li>
        <h1>{this.props.author.name}</h1>
        <h2>{this.props.comment.createdAt}</h2>
        <p>{this.props.comment.content}</p>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  author: state.entities.users[ownProps.comment.author_id],
  comment: ownProps.comment,
})

export default connect(mapStateToProps)(CommentItem);
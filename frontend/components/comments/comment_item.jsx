import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
 
class CommentItem extends React.Component {

  render() {  
    debugger
    return (
      <li>
        <h1>{this.props.author.name}</h1>
        <h2>{this.props.comment.createdAt}</h2>
        <button onClick={() => this.props.deleteComment(this.props.comment.id)}>x</button>
        <p>{this.props.comment.content}</p>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  author: state.entities.users[ownProps.comment.author_id],
  comment: ownProps.comment,
})

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
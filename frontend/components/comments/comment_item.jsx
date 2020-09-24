import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
 
class CommentItem extends React.Component {
  render() {  
    const { comment, currentUser, author } = this.props;

    const deleteButton = comment.author_id === currentUser ? (
      <button onClick={() => this.props.deleteComment(this.props.comment.id)}>x</button>
    ) : (
      null
    );

    return (
      <li className="comment">
        <div>
          <h1>{author.name}</h1>
          <h4>{comment.createdAt}</h4>
        </div>
        {deleteButton}
        <p>{comment.content}</p>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  author: state.entities.users[ownProps.comment.author_id],
  comment: ownProps.comment,
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
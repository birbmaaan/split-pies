import React from 'react';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.allComments();
  }

  render() {
    let commentBox;
    if (this.props.comments.length === 0) {
      commentBox = null
    } else {
      commentBox = (
        <ul>
          {this.props.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )
    }

    return (
    <div>
      {commentBox}
    </div>
    )
  }
}

export default CommentIndex;
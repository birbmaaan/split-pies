import React from 'react';
import CommentItem from './comment_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.allComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      content: this.state.content, 
      author_id: this.props.userId, 
      bill_id: this.props.billId})
    this.setState({content: ''})
  }

  handleChange(e) {
    this.setState({ content: e.currentTarget.value })
  }

  render() {
    const { comments } = this.props;

    let commentBox;
    if (comments.length === 0) {
      commentBox = null
    } else {
      commentBox = (
        <ul className="comment-index">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )
    }

    return (
    <div className='comment-index-container'>
      {commentBox}
      <form className="new-comment-form" onSubmit={this.handleSubmit}>  
        <textarea onChange={this.handleChange} value={this.state.content} placeholder="Add a comment"></textarea>
        <button className="orange-btn" type="submit">Post</button>
      </form>
    </div>
    )
  }
}

export default CommentIndex;
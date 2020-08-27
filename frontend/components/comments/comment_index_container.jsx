import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { allComments, createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let billComments = [];
  const allComments = Object.values(state.entities.comments);
  if (allComments) {
    allComments.forEach((comment) => {
      if ((ownProps.bill.partners[0].userId === comment.author_id || 
          ownProps.bill.partners[1].userId === comment.author_id) && 
          ownProps.bill.id === comment.bill_id) {
        billComments.push(comment);
      }
    })
  }
  
  return ({
    comments: billComments,
    billId: ownProps.bill.id,
    userId: state.session.id,
  })
}

const mapDispatchToProps = dispatch => ({
  allComments: () => dispatch(allComments()),
  createComment: comment => dispatch(createComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
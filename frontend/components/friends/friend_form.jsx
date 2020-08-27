import React from 'react';
import { clearSessionErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friend_actions';
import { closeModal} from '../../actions/modal_actions';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSuccess = this.renderSuccess.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFriend({userId: this.props.userId, email: this.state.email}).then(() => this.renderSuccess())
    this.setState({email: ''});
    this.props.closeModal();
  }

  handleChange(e) {
    this.setState({email: e.currentTarget.value})
  }

  renderErrors() {
    return(
      <div className="error-alert">
        <p>{this.props.errors}</p>
        <button className='orange-btn' onClick={() => this.props.clearErrors()}>OK</button>
      </div>
    )
  }

  renderSuccess() {
    this.setState({ message: 'Invite sent! :)' });
    setTimeout(() => this.setState({ message: '' }), 3000);
  }

  // componentDidMount() {
  //   this.props.clearErrors()
  // }

  render() {
    let errors = this.props.errors.length === 0 ? null : this.renderErrors()

    return (
      <form className="add-friend-form" onSubmit={this.handleSubmit}>
        <h1>Invite friends</h1>
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.email} placeholder='Enter an email address'/>
          <button type="submit">Send invite</button>
          <p>{this.state.message}</p>  
          <div>{errors}</div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.session.id,
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearSessionErrors()),
  addFriend: friendInfo => dispatch(addFriend(friendInfo)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendForm)
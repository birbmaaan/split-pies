import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSuccess = this.renderSuccess.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFriend({userId: this.props.userId, email: this.state.email})
    this.setState({email: ''});
    this.renderSuccess()
  }

  handleChange(e) {
    this.setState({email: e.currentTarget.value})
  }

  renderSuccess() {
    this.setState({message: 'Invite sent! :)'});
    setTimeout(() => this.setState({message: ''}), 3000);
  }

  render() {
    return (
      <form className="add-friend-form" onSubmit={this.handleSubmit}>
        <h1>Invite friends</h1>
        <input type="text" onChange={this.handleChange} value={this.state.email} placeholder='Enter an email address'/>
        <button type="submit">Send invite</button>
        <p>{this.state.message}</p>  
      </form>
    )
  }
}

export default FriendForm
import React from 'react';

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
  }

  handleChange(e) {
    this.setState({email: e.currentTarget.value})
  }

  renderErrors() {
    return(
      <div className="add-friend-error">
        <p>{this.props.errors}</p>
        <button onClick={() => this.props.clearErrors()}>OK</button>
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

export default FriendForm
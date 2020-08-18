import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  renderErrors() {
    return this.props.errors.length === 0 ? (null) : (
      <div className='error-messages'>
        <p>Whoops! We couldn't find an account for that email address and password. Please try again.</p>
      </div>
    )
  }

  render() {
    return (
      <div className="login-form">
        {this.renderErrors()}
        <h1>Welcome to SplitPies</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>
          </label>
          <label>Password
            <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
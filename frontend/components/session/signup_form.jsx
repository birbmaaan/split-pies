import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  demoLogin(e) {
    e.preventDefault();
    const guestUser = {username: "guest", password: "password"}
    this.props.login(guestUser)
  }

  renderErrors() {
    return (
      <div className='signup-errors'>
        <h3>The following errors occurred:</h3>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {

    return (
      <div className='signup-login-form-container'>
        <Link to='/'><img src={window.logo} alt="splitpies logo"/></Link>
        <div className='signup-form'>
          <h1>INTRODUCE YOURSELF</h1>
          {this.props.errors.length === 0 ? null : <div>{this.renderErrors()}</div>}
          <form onSubmit={this.handleSubmit}>
            <label><h2>Hi there! My username is</h2></label>
            <br/>
              <input 
                type="text" 
                onChange={this.handleChange('username')} 
                value={this.state.username}
              />
              <br/>
            <label>Here's my <strong>email address:</strong></label> 
            <br/>
              <input 
                type="text" 
                onChange={this.handleChange('email')} 
                value={this.state.email}
              />
              <br/>
            <label>And here's my <strong>password:</strong></label>
            <br/>
              <input 
                type="password" 
                onChange={this.handleChange('password')} 
                value={this.state.password}
              />
              <br/>
              <div className='signup-form-submit'>
                <button className='orange-btn' type='submit'>Sign me up!</button>
                <p>or</p>
                <button onClick={this.demoLogin}>Sign in as guest</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;
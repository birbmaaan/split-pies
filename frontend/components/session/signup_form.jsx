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

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  renderErrors() {
    return this.props.errors.length === 0 ? (null) : (
      <div className='error-messages'>
        <h2>The following errors occurred:</h2>
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

  render() {
    return (
      <div className='signup-form-container'>
        <Link to='/'>Logo</Link>
        <div className='signup-form'>
          <h1>Introduce Yourself</h1>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <label>Hi there! My username is
              <input 
                type="text" 
                onChange={this.handleChange('username')} 
                value={this.state.username}
              />
            </label>
            <label>Here's my <strong>email address:</strong>
              <input 
                type="text" 
                onChange={this.handleChange('email')} 
                value={this.state.email}
              />
            </label>
            <label>And here's my <strong>password:</strong>
              <input 
                type="password" 
                onChange={this.handleChange('password')} 
                value={this.state.password}
              />
            </label>
            <button type='submit'>Sign me up!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;
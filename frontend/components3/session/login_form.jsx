import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  renderErrors() {
    return(
      <div className='login-errors'>
        <p>Whoops! We couldn't find an account for that email address and password. Please try again.</p>
        <button onClick={() => this.props.clearErrors()}>x</button>
      </div>
    )
  }

  render() {
    return (
      <div className="signup-login-form-container">
        { this.props.errors.length === 0 ? null : <div>{this.renderErrors()}</div> }
        <Link to='/'><img src={window.logo} alt="splitpies logo" /></Link>
        <div className='login-form'>
          <h1>WELCOME TO SPLITPIES</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Email</label>
            <br/>
              <input type="text" onChange={this.handleChange('email')} value={this.state.email}/>
            <br/>
            <label>Password</label>
            <br/>
              <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
            <br/>
            <button className="orange-btn" type='submit'>Log in</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
import React from 'react';
import { connect } from 'react-redux';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      user: {}
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    debugger
    this.setState({inputVal: e.currentTarget.value})
  }

  setToName(name) {
    let selectedUser;
    this.props.users.forEach((user) => {
      if (user.name === name) selectedUser = user;
    })
    this.setState({inputVal: name, user: selectedUser});
    const input = document.getElementById('autofill');
    input.value = name;
  }

  possibleName(name) {
    return name.indexOf(this.state.inputVal) >= 0;
  }

  render() {
    debugger
    return (
      <div>
        {/* <input type="text" id='autofill' onChange={(e) => this.handleInput(e)}/> */}
        <ul>
          {this.props.users.map((user) => {
            if (this.possibleName(user.name)) {
              return (
                <li key={user.id} onClick={() => this.setToName(user.name)}>
                  {user.name}
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: Object.values(state.entities.users)
})

export default connect(mapStateToProps)(Autocomplete)
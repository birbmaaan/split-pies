import React from 'react';
import { calculateSplit, calculateTotal } from '../../util/bill_api_util';
import Autocomplete from '../autocomplete';

class BillForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.bill;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    (this.props.processForm(this.state));
    this.props.closeModal();
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  handleAmount(amount) {
    const that = this;
    return (e) => {
      const split = calculateSplit(e.currentTarget.value);
      that.setState({
      amount: e.currentTarget.value,
      split: split,
      partner_one_paid_share: e.currentTarget.value,
      partner_one_owed_share: split,
      partner_two_owed_share: split,
    })
    } 
  }

  possibleName(name) {
    return name.indexOf(this.state.friendName) >= 0;
  }

  setToName(name) {
    debugger
    let selectedUser;
    this.props.friends.forEach((user) => {
      if (user.name === name) selectedUser = user;
    })

    if (selectedUser.id === this.props.userId) {
      this.setState({
        partner_one_id: selectedUser.id,  
        partner_two_id: this.props.userId,
        friend: selectedUser
      });
    } else {
        this.setState({
          partner_two_id: selectedUser.id,  
          partner_one_id: this.props.userId,
          friend: selectedUser
        });
    }
    const input = document.getElementById('autofill');
    input.value = name;
  }

  render() {
    return (
      <div>
        <section className='modal-header'>
          <h1>{this.props.formType}</h1>
          <button onClick={this.props.closeModal}>x</button>
        </section>
        <section className="modal-user-selector">
          <p>With you and: </p>
          <input type="text" id='autofill' onChange={this.handleChange('friendName')} />
          <ul>
            {this.props.friends.map((user) => {
              if (this.possibleName(user.name)) {
                return (
                  <li key={user.id} onClick={() => this.setToName(user.name)}>
                    {user.name}
                  </li>
                )
              }
            })}
          </ul>
        </section>
        <form onSubmit={this.handleSubmit} className="bill-form-modal">
          <div className="bill-form-inputs">
            <img src={window.catGeneral} alt="category-icon" />

            <div className="bill-info">
              <input type="text" onChange={this.handleChange("description")} value={this.state.description} placeholder="Enter a description"/>
              <div className="amount-container">
                <p>$</p>
                <input type="text" onChange={this.handleAmount()} value={this.state.amount} placeholder="0.00"/>
              </div>        
            </div>
          </div>

          <p>Paid by you and split equally.</p>
          <p>(${this.state.split}/person)</p>
          <div className='modal-footer'>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button type='submit' className="green-btn">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BillForm;
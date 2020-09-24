import React from 'react';
import { calculateSplit } from '../../util/bill_api_util';

class BillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.bill;
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSelect() {
    return (e) => {
      let currentFriend = {id: '', name: ''};
      this.props.friends.forEach((friend) => {
        if (friend.id === parseInt(e.currentTarget.value, 10)) currentFriend = friend;
      })

      this.setState({
      friend: currentFriend, 
      partner_two_id: currentFriend.id,
      partner_one_id: this.props.userId,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    (this.props.processForm(this.state)).then(() => this.props.closeModal());
  }

  handleAmount() {
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

  handleSwitch() { 
    return () => {
    let newOne = this.state.partner_two_id;
    let newTwo = this.state.partner_one_id;

    this.setState({
      partner_one_id: newOne,
      partner_two_id: newTwo,
    })
    }
  }

  renderErrors() {
    return (
      <div className="error-alert">
        <ul>
        {this.props.errors.map((error, i) =>{
          return <li key={i}>{error}</li>
        })}
        </ul>
        <button className='orange-btn' onClick={() => this.props.clearErrors()}>OK</button>
      </div>
    )
  }

  render() {
    const { description, amount, partner_one_id, partner_two_id, friend, split, category } = this.state;
    
    let errors = this.props.errors.length === 0 ? null : this.renderErrors()

    let categorySelect;
    switch (this.state.category) {
      case "":
        categorySelect = <img src={window.catGeneral} alt="category-general" />;
      case "general":
        categorySelect = <img src={window.catGeneral} alt="category-general" />;
        break;
      case "groceries":
        categorySelect = <img src={window.catGrocery} alt="category-groceries" />;
        break;
      case "food":
        categorySelect = <img src={window.catFood} alt="category-food" />;
        break;
      case "entertainment":
        categorySelect = <img src={window.catEntertainment} alt="category-entertainment" />;
        break;
      case "transportation":
        categorySelect = <img src={window.catTransportation} alt="category-transportation" />;
        break;
      case "home":
        categorySelect = <img src={window.catHome} alt="category-home" />;
        break;
      case "utilities":
        categorySelect = <img src={window.catUtilities} alt="category-utilities" />;
        break;
      default:
        break;
    }

    const billForm = partner_two_id ? (
      <form onSubmit={this.handleSubmit} className='bill-form-modal'>
        <div className='bill-form-inputs'>
          <div className="bill-category">
            <select className="selector" value={category} onChange={this.handleChange("category")}>
              <option value="" disabled>Choose a category</option>
              <option value="general">general</option>
              <option value="groceries">groceries</option>
              <option value="food">food</option>
              <option value="entertainment">entertainment</option>
              <option value="transportation">transportation</option>
              <option value="home">home</option>
              <option value="utilities">utilities</option>
            </select>
            {categorySelect}
          </div>
          <div className="bill-info">
            <input type="text" onChange={this.handleChange("description")} value={description} placeholder="Enter a description" />
            <div className="amount-container">
              <p>$</p>
              <input type="text" onChange={this.handleAmount()} value={amount} placeholder="0.00" />
            </div>
          </div>
        </div>

        <div className="bill-paid-info">
          <p>Paid by</p>
          <select className='selector' value={partner_one_id} onChange={this.handleSwitch()}>
            <option defaultValue={this.props.userId}>you</option>
            <option value={friend.id}>{friend.name}</option>
          </select>
          <p>and split equally.</p>
        </div>
        <p>(${split}/person)</p>

        <div className='modal-footer'>
          <button onClick={this.props.closeModal}>Cancel</button>
          <button type='submit' className="green-btn">Save</button>
        </div>
        <div>{errors}</div>
      </form>
    ) : (null)

    return (
    <div>
      <section className='modal-header'>
        <h1>{this.props.formType}</h1>
        <button onClick={this.props.closeModal}>x</button>
      </section>
      <section className="modal-user-selector">
        <p>With <strong>you</strong> and: </p>
        <select className='selector' value={friend.id} onChange={this.handleSelect()}>
          <option value='' disabled>Select a friend</option>
          {this.props.friends.map(oneFriend => (
            <option key={oneFriend.id} value={oneFriend.id}>{oneFriend.name}</option>
          ))}
        </select>
      </section>

      {billForm}
    </div>
    )
  }
}

export default BillForm;
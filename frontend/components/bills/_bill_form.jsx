import React from 'react';
import { calculateSplit, calculateTotal } from '../../util/bill_api_util';

class BillForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      amount: '',
      category: '',
      creatorId: '', 
      split: '0.00',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
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
      split: split
    })
    } 
  }

  render() {
    return (
      <div>
        <section className='modal-header'>
          <h1>{this.props.formType}</h1>
          <button onClick={this.props.closeModal}>x</button>
        </section>
        <form onSubmit={this.handleSubmit} className="bill-form-modal">
          <div className="bill-form-inputs">
            <select onChange={this.handleChange("category")} value={this.state.category}>
              <option value="general">general</option>
              <option value="food">food</option>
              <option value="grocery">grocery</option>
            </select>
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
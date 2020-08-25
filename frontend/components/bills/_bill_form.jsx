import React from 'react';

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
    this.calculateSplit = this.calculateSplit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  calculateSplit(e) {
    debugger
    let amount = (e.currentTarget.value);
    let split = 0;
    if (parseInt(amount, 10) !== NaN) {
      amount = parseInt(amount, 10);
      split = amount / 2
    } else {
      split = 0.00
    }
    const stringSplit = `$${split.to_s}`
    this.setState({split: stringSplit, amount: e.currentTarget.value})
  }

  render() {
    return (
      <div>
        <section className='modal-header'>
          <h1>{this.props.formType}</h1>
          <button onClick={this.props.closeModal}>x</button>
        </section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange("category")} value={this.state.category}/>
          <input type="text" onChange={this.handleChange("description")} value={this.state.description} placeholder="Enter a description"/>
          <br/>
          <input type="text" onChange={this.handleChange("amount")} value={this.state.amount} placeholder="0.00"/>
          <br/>
          <p>Paid by you and split equally</p>
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
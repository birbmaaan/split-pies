import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    alert('Thanks for your completely honest feedback! :)')
  }

  render() {
    debugger
    return (
      <div className="feedback-modal">
        <section className='modal-header'>
          <h1>Feedback</h1>
          <button onClick={this.props.closeModal}>x</button>
        </section>
        <form onSubmit={this.handleSubmit} className="bill-form-modal">
          <div className="feedback-form">
            <h1>Do you like Split Pies?</h1>
            <label>Yes!</label>
            <input type="radio" name='review'/> 
            <label>Definitely!</label>
            <input type="radio" name='review'/> 
            <label>Absolutely!</label>
            <input type="radio" name='review'/> 
          </div>
          <div className='modal-footer'>
            <button onClick={this.props.closeModal}>Cancel</button>
            <button type='submit' className="green-btn">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
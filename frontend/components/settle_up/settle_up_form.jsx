import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class SettleUpForm extends React.Component {
  render() {
    return (
      <div className="settle-up-modal">
        <section className='modal-header'>
          <h1>Settle Up</h1>
          <button onClick={this.props.closeModal}>x</button>
        </section>
        <p>Settle up? In this economy?</p>
        <div className='modal-footer'>
            <button onClick={this.props.closeModal}>Cancel</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SettleUpForm);
import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class DashHeader extends React.Component {

  render() {
    const pending = this.props.registered ? null : (
      <p>invite pending</p>
    )
    return (
      <div className="dash-content-header">
        <div>
          <h1>{this.props.name}</h1>
          {pending}
        </div>
        <ul>
          <button className='orange-btn' onClick={() => this.props.openModal('newBill')}>Add an expense</button>
          <button className='green-btn'>Settle up</button>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  registered: ownProps.registered,
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashHeader);
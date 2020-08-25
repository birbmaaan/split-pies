import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import NewBillContainer from './bills/new_bill_container';
import EditBillContainer from './bills/edit_bill_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'newBill':
      component = <NewBillContainer />;
      break;
    case 'editBill':
      component = <EditBillContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
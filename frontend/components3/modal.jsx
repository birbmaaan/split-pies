import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import NewBillContainer from './bills/new_bill_container';
import EditBillContainer from './bills/edit_bill_container';

function Modal({modal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.formName) {
    case 'newBill':
      component = <NewBillContainer />;
      break;
    case 'editBill':
      component = <EditBillContainer billId={modal.objectId}/>;
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

const mapStateToProps = (state) => {
  return ({
  modal: state.ui.modal,
})
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
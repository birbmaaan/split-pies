import React from 'react';
import BillIndexContainer from '../../bills/bill_index_container';
import RightColumn from '../right_column';
import DashHeader from '../dash_header';
import NoExpenses from './no_expenses';

class BillsDash extends React.Component {
  componentDidMount() {
  }

  render() {
  
    return (
      <div className='dash-content-container'> 
        <section className="main-content-center">
          <DashHeader 
            name={"All expenses"}
            registered={true}
            />
          <BillIndexContainer />
        </section>
        <RightColumn />
      </div>
    )
  }
}

export default BillsDash;

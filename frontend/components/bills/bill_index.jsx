import React from 'react';
import DashHeader from '../dashboard/_dash_header';

class BillIndex extends React.Component {

  render() {
    return (
      <div className="dash-content-container">
        <section className="main-content-center">
          <DashHeader
            name={"All expenses"}
            registered={true}
          />
        </section>
        <section className='main-content-right'>
          <h1>YOUR TOTAL BALANCE</h1>
          <p>You are all settled up</p>
        </section>
      </div>
    )
  }
}

export default BillIndex;
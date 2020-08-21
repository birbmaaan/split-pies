import React from 'react';

const DashHeader = (props) => {
  const pending = props.registered ? null : (
    <p>invite pending</p>
  )

  return (
    <div className="dash-content-header">
      <h1>{props.name}</h1>
      {pending}
      <ul>
        <button className='orange-btn'>Add an expense</button>
        <button className='green-btn'>Settle up</button>
      </ul>
    </div>
  )
}

export default DashHeader;
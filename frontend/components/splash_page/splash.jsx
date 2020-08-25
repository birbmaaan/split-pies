import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>

        <section className="splash-main"> 
          <div>
            <h1>Less stress when sharing expenses</h1>
            <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
            <button><Link to='/signup'>Sign up</Link></button>
          </div>
          <img src={window.pie} alt="have your pie and eat it too" />
        </section>
        <ul className='splash-body'>
          <li className='splash-content-black'>
              <h1>Track balances</h1>
              <p>Keep track of shared expenses, balances, and who owes who.</p>
            <img src={window.money} alt="money money" />
          </li>
          <li className='splash-content-green'>
              <h1>Organize expenses</h1>
            <p>Split expenses with any group: trips, housemates, friends, and family.</p>
            <img src={window.money} alt="money money" />  
          </li>
        </ul>
        <ul className='splash-body'>
          <li className='splash-content-orange'>
              <h1>Add expenses easily</h1>
              <p>Quickly add expenses on the go before you forget who paid.</p>
            <img src={window.money} alt="money money" />
          </li>
          <li className='splash-content-black'>
              <h1>Pay friends back</h1>
              <p>Settle up with a friend and record any cash or online payment.</p>
            <img src={window.money} alt="money money" />
          </li>
        </ul>

        <section className="splash-last">

        </section>
        <footer className='splash-footer'>
          <h1>The whole nine yards</h1>
          <ul>
            <li>Add groups and friends</li>
            <li>Split expenses, record debts</li>
            <li>et cetera</li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Splash;
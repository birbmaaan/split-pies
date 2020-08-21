import React from 'react';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>This is the splash page

        <section className="splash-main"> 

        </section>
        <section className="splash-body">
          <section className='splash-content'>
              <h1>Track balances</h1>
              <p>Keep track of shared expenses, balances, and who owes who.</p>
              <img src="" alt="phone photo"/>
          </section>
          <section className='splash-content'>
              <h1>Organize expenses</h1>
            <p>Split expenses with any group: trips, housemates, friends, and family.</p>
              <img src="" alt="phone photo"/>
          </section>
          <section className='splash-content'>
              <h1>Add expenses easily</h1>
              <p>Quickly add expenses on the go before you forget who paid.</p>
              <img src="" alt="phone photo"/>
          </section>
          <section className='splash-content'>
              <h1>Pay friends back</h1>
              <p>Settle up with a friend and record any cash or online payment.</p>
              <img src="" alt="phone photo"/>
          </section>
        </section>
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
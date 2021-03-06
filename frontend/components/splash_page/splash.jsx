import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>

        <section className="splash-main"> 
          <div>
            <h1>Less stress when sharing expenses</h1>
            <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
            <Link to='/signup'><button>Sign up</button></Link>
            <div className="about-links-splash">
              <a href="https://github.com/birbmaaan/">
                <FontAwesomeIcon className="icon-links" icon={faGithubSquare} />
              </a>
              <a href="https://www.linkedin.com/in/elijah-dove-4770b3184/">
                <FontAwesomeIcon className="icon-links" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <img src={window.pie} alt="have your pie and eat it too" />
        </section>
        <ul className='splash-body'>
          <li className='splash-content-black'>
              <h1>Track balances</h1>
              <p>Keep track of shared expenses, balances, and who owes who.</p>
            <img src={window.asset1} alt="money money" />
          </li>
          <li className='splash-content-green'>
              <h1>Organize expenses</h1>
            <p>Split expenses with any group: trips, housemates, friends, and family.</p>
            <img src={window.asset2} alt="money money" />  
          </li>
          <li className='splash-content-orange'>
              <h1>Add expenses easily</h1>
              <p>Quickly add expenses on the go before you forget who paid.</p>
            <img src={window.asset3} alt="money money" />
          </li>
          <li className='splash-content-black'>
              <h1>Pay friends back</h1>
              <p>Settle up with a friend and record any cash or online payment.</p>
            <img src={window.asset4} alt="money money" />
          </li>
        </ul>
        
        <section className="splash-last">

        </section>
        <footer className='splash-footer'>
          <h1>The whole pie farm</h1>
          <ul>
            <li>Add friends</li>
            <li>Split expenses</li>
            <li>Record debts</li>
            <li>Comment on expenses</li>
            <li>View all expenses</li>
            <li>View expenses between friends</li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Splash;
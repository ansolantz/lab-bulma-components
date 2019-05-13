import React from 'react';
import CoolButton from './CoolButton';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
              width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="http://localhost:3000/">
              Home
            </a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  {/* <a href="http://localhost:3000/" className="bd-tw-button button" target="_blank" rel="noopener noreferrer">

                    <span>
                      Login
                    </span>
                    
                  </a> */}
                  <CoolButton>Login</CoolButton>
                </p>
                <p className="control">
                  <CoolButton isPrimary>Signup</CoolButton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
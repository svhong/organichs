import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <center><h1>Welcome to Organic Homeschooler!</h1></center>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="https://www.porac.org">BRAND</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href='/Plans' className="dropdown-toggle" data-toggle="dropdown">Plans we offer<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="/AllPlans">Brief Summary of All Plans</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/Accidental">Accidental Death &amp; Dismemberment</a></li>
                    <li role="separator" className="divider"></li>
                    <li className="dropdown-submenu">
                      <a className="test" tabIndex="-1">Disability Coverage <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a tabIndex="-1" href="/Disability">Disability Coverage</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a tabIndex="-1" href="/Faq">Frequently Asked Questions</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a tabIndex="-1" href="/Claim">How to file a Claim</a></li></ul></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/Life">Life </a></li>
                    <li href="separator" className="divider"></li>
                    <li><a href="/Ltc">Long Term Care</a></li>
                  </ul>
                </li>
                <li><a href="/AboutUs">About MST</a></li>
                <li><a href="/AboutIbt">About I&amp;BT</a></li>
                <li><a href="/Contact">Contact us</a></li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
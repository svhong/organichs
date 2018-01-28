import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
                <h1 className="titleTrick">Organic Home Schooler</h1>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="http://www.google.com">BRAND</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            <li><a href="/AboutUs">Organic Lifestyle</a></li>
                                <li className="dropdown">
                                    <a href='/Plans' className="dropdown-toggle" data-toggle="dropdown">Recipes<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/AllPlans">Catergories</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/Accidental">Crunchy Korean</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li className="dropdown-submenu">
                                            <a className="test" tabIndex="-1">Dropdown Inside Dropdown <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a tabIndex="-1" href="/Disability">Some Stuff</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a tabIndex="-1" href="/Faq">More Stuff</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a tabIndex="-1" href="/Claim">Even More stuff</a></li></ul></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/Life">Wannabe Crunchy</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/Ltc">Home Schooling</a></li>
                                    </ul>
                                </li>
                                <li><a href="/AboutIbt">About Me</a></li>
                                <li><a href="/Contact">Contact us</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    );
  }
}

export default Header;
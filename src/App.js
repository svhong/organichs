import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Includes
import Header from './components/headers/header';
import Footer from './components/footers/footer';
import Homepage from './components/pages/homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>We are currently under construction...<br/>We will be with you shortly..</p>
        <Footer />
      </div>
    );
  }
}

export default App;

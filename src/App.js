import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Includes
import Header from './components/headers/header';
import Footer from './components/footers/footer';
// import FormComp from './components/pages/formcomp';
import LandingPage from './components/pages/landingpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BodyContent />
        <Footer />
      </div>
    );
  }
}

export default App;

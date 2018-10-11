import React, { Component } from 'react';
import './App.css';

import Header from './components/header_footer/Header';
import Contents from './components/content/Contents';
import ContentsInfo from './components/ContentsInfo';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="main" >
        <div className="header-background"></div>
        <Header ></Header>
        <Contents contents={ContentsInfo}></Contents>
        <Footer />
      </div>
    );
  }
}

export default App;

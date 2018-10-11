import React, { Component } from 'react';
import './App.css';
import Contents from './components/content/Contents';
import ContentsInfo from './components/ContentsInfo';
import Header from './components/header_footer/Header'
class App extends Component {
  render() {
    return (
      <div className="main" >
        <div className="header-background"></div>
        <Header ></Header>
        <Contents contents={ContentsInfo}></Contents>
      </div>
    );
  }
}

export default App;

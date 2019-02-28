import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MainSideBar from './components/MainSideBar'
import Content from './components/Content'
import Footer from './components/Footer'
import ControlSideBar from './components/ControlSideBar'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <Header />
        </header>

        <MainSideBar />

        <Content />

        <Footer />

        <ControlSideBar />
      </div>
    );
  }
}

export default App;

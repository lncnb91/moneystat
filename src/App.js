import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import update from 'immutability-helper'
import Header from './components/Header'
import MainSideBar from './components/MainSideBar'
import ContentHeader from './components/ContentHeader'
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

        <aside className="main-sidebar">
          <MainSideBar />
        </aside>

        <div className="content-wrapper">
          <section className="content-header">
            <ContentHeader />
          </section>

          <section className="content">
            <Content />
          </section>
        </div>

        <footer className="main-footer">
          <Footer />
        </footer>

        <aside className="control-sidebar control-sidebar-dark">
          <ControlSideBar />
        </aside>
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;

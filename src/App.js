import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MainSideBar from './components/MainSideBar'
import Content from './components/Content'
import Footer from './components/Footer'
import ControlSideBar from './components/ControlSideBar'
import Loader from './components/Loader'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "none"
    }
  }

  showLoader = () => {
    this.setState({loading: "block"})
  }

  hideLoader = () => {
    this.setState({loading: "none"})
  }

  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <Header />
        </header>

        <MainSideBar />

        <Content showLoader={this.showLoader}
          hideLoader={this.hideLoader} />

        <Footer />

        <ControlSideBar />

        <Loader display={this.state.loading} />
      </div>
    );
  }
}

export default App;

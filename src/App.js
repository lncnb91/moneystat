import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import './App.css'
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
      loading: "none",
      smallBox: {
        budget: 0,
        total_spent: 0,
        wallet_balance: 0,
        last_month_spent: 0
      },
      spendingByUser: [],
      detailedBudgets: [],
      transactions: [],
      monthlySpending: []
    }
  }

  componentDidMount() {
    this.showLoader()
    axios.get('http://localhost:3001/api/v1/dashboards.json?wallet_id=1')
    .then(response => {
      const smallBox = update(this.state.smallBox, {$set: response.data.small_box})
      this.setState({
        smallBox: smallBox,
        spendingByUser: response.data.spending_by_user,
        detailedBudgets: response.data.detailed_budgets,
        transactions: response.data.spent_expenses,
        monthlySpending: response.data.monthly_spending
      })
      this.hideLoader()
    })
    .catch(error => console.log(error))
  }

  showLoader = () => {
    this.setState({loading: "block"})
  }

  hideLoader = () => {
    this.setState({loading: "none"})
  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
  }

  addNewEntry = (entry) => {
    this.showLoading()
    axios.post('http://localhost:3001/api/v1/entries', entry)
    .then(response => {
      const transactions = update(this.state.transactions, { $splice: [[0, 0, response.data.spent_expenses]]})
      this.setState({transactions: transactions})
      this.hideLoading()
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <Header />
        </header>

        <MainSideBar />

        <Content showLoader={this.showLoader}
          hideLoader={this.hideLoader}
          formatNumber={this.formatNumber}
          smallBox={this.state.smallBox}
          spendingByUser={this.state.spendingByUser}
          detailedBudgets={this.state.detailedBudgets}
          transactions={this.state.transactions}
          monthlySpending={this.state.monthlySpending}
          addNewEntry={this.addNewEntry} />
        <Footer />

        <ControlSideBar />

        <Loader display={this.state.loading} />
      </div>
    );
  }
}

export default App

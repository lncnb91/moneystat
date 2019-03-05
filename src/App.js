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
      spentExpenses: []
    }
  }

  componentDidMount() {
    this.showLoader()
    axios.get('https://moneystat-api.herokuapp.com/api/v1/dashboards.json?wallet_id=1')
    .then(response => {
      const smallBox = update(this.state.smallBox, {$set: response.data.small_box})
      const spendingByUser = update(this.state.spendingByUser, { $splice: [[0, 0, response.data.spending_by_user]]})
      const detailedBudgets = update(this.state.detailedBudgets, { $splice: [[0, 0, response.data.detailed_budgets]]})
      const spentExpenses = update(this.state.spentExpenses, { $splice: [[0, 0, response.data.spent_expenses]]})
      this.setState({
        smallBox: smallBox,
        spendingByUser: spendingByUser,
        detailedBudgets: detailedBudgets,
        spentExpense: spentExpenses
      })
      console.log("Response returned")
      console.log(response.data.detailed_budgets)
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

  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <Header />
        </header>

        <MainSideBar />

        <Content showLoader={this.showLoader}
          hideLoader={this.hideLoader}
          smallBox={this.state.smallBox}
          spendingByUser={this.state.spendingByUser}
          detailedBudgets={this.state.detailedBudgets}
          spentExpense={this.state.spentExpense} />

        <Footer />

        <ControlSideBar />

        <Loader display={this.state.loading} />
      </div>
    );
  }
}

export default App

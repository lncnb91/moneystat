import React, { Component } from 'react'
import DetailedBudget from './MainRow/DetailedBudget'
import SpentExpense from './MainRow/SpentExpense'
import SpendingByUserChart from './MainRow/SpendingByUserChart'
import MonthlySpendingChart from './MainRow/MonthlySpendingChart'
import Calendar from './MainRow/Calendar'

class MainRow extends Component {
  render() {
    return (
      <div className="row">
        <section className="col-lg-9 connectedSortable">

          <DetailedBudget howLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            detailedBudgets={this.props.detailedBudgets} />

          <SpentExpense howLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            spentExpense={this.props.spentExpense} />

        </section>

        <section className="col-lg-3 connectedSortable">
          <SpendingByUserChart spendingByUser={this.props.spendingByUser} />

          <MonthlySpendingChart />

          <Calendar />

        </section>
      </div>
    );
  }
}

export default MainRow
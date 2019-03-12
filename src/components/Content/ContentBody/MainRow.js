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

          <DetailedBudget showLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            formatNumber={this.props.formatNumber}
            detailedBudgets={this.props.detailedBudgets} />

          <SpentExpense showLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            transactions={this.props.transactions}
            formatNumber={this.props.formatNumber}
            addNewEntry={this.addNewEntry} />

        </section>

        <section className="col-lg-3 connectedSortable">
          <SpendingByUserChart spendingByUser={this.props.spendingByUser} />

          <MonthlySpendingChart monthlySpending={this.props.monthlySpending} />

          <Calendar />

        </section>
      </div>
    )
  }
}

export default MainRow
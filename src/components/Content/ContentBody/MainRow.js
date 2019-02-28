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

          <DetailedBudget />

          <SpentExpense />
        </section>

        <section className="col-lg-3 connectedSortable">
          <SpendingByUserChart />

          <MonthlySpendingChart />

          <Calendar />

        </section>
      </div>
    );
  }
}

export default MainRow
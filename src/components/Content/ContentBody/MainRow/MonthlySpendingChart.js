import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

var options = {
  legend: 
  {
    display: false,
  }
}

class MonthlySpendingChart extends Component {

  convertResponseData = (response) => {
    const label = response.map(user => (user.month));
    const data = response.map(user => (user.total_expense));
    return {
      labels: label,
      datasets: [
        {
          fill: false,
          lineTension: 0.1,
          borderColor: 'white',
          pointBackgroundColor: 'white',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data
        }
      ]
    }
  }

  render() {
    return (
      <div className="box box-solid bg-teal-gradient">
        <div className="box-header">
          <i className="fa fa-th"></i>

          <h3 className="box-title">Monthly Spending</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <div className="box-body border-radius-none">
          <Line data={this.convertResponseData(this.props.monthlySpending)}
            options = {options} />
        </div>
      </div>
    );
  }
}

export default MonthlySpendingChart

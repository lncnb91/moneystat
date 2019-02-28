import React, { Component } from 'react'

class MonthlySpendingChart extends Component {
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
          <div className="chart" id="line-chart" style={{height: "250px"}}></div>
        </div>
      </div>
    );
  }
}

export default MonthlySpendingChart
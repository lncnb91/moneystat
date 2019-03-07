import React, { Component } from 'react'
import DetailedBudgetRow from './DetailedBudget/DetailedBudgetRow'

class DetailedBudget extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Detailed budget</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body table-responsive table-bordered">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Expected expense</th>
                <th>Spent</th>
                <th>Available</th>
              </tr>
              {this.props.detailedBudgets.map((budget) => {
                return(
                  <DetailedBudgetRow budget={budget}
                    key={budget.id}
                    formatNumber={this.props.formatNumber}/>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="box-footer clearfix no-border">
          <button type="button" className="btn btn-default pull-right" data-toggle="modal" data-target="#modal-default"><i className="fa fa-plus"></i>
            Add item
          </button>
        </div>
      </div>
    );
  }
}

export default DetailedBudget
import React, { Component } from 'react'
import EntryInputModal from './SpentExpense/EntryInputModal'
import SpentExpenseRow from './SpentExpense/SpentExpenseRow'

class SpentExpense extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Spent expenses</h3>

          <div className="box-tools pull-right">
            <div className="input-group input-group-sm" style={{width: "150px"}}>
              <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-body table-responsive table-bordered">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
              {this.props.transactions.map((transaction) => {
                return(
                  <SpentExpenseRow transaction={transaction}
                    key={transaction.id}
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
        <EntryInputModal addNewEntry={this.addNewEntry} />
      </div>
    );
  }
}

export default SpentExpense
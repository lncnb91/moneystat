import React, { Component } from 'react'
import update from 'immutability-helper'

class DetailedBudget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailedBudgets: []
    }
  }

  componentDidUpdate() {
    const detailedBudgets = update(this.state.detailedBudgets, { $splice: [[0, 0, this.props.detailedBudgets[0]]]})
    this.setState({detailedBudgets: detailedBudgets})
  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
  }

  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Detailed budget</h3>
        </div>
        <div className="box-body table-responsive table-bordered">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>Category</th>
                <th>Expected expense</th>
                <th>Spent</th>
                <th>Available</th>
              </tr>
              <tr>
                <td>Bank debt</td>
                <td>12.000.000<sup>đ</sup></td>
                <td>0<sup>đ</sup></td>
                <td>12.000.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Food & Drink</td>
                <td>3.000.000<sup>đ</sup></td>
                <td>1.500.000<sup>đ</sup></td>
                <td>1.500.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Gasolin</td>
                <td>300.000<sup>đ</sup></td>
                <td>100.000<sup>đ</sup></td>
                <td>200.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Insurances</td>
                <td>2.000.000<sup>đ</sup></td>
                <td>0<sup>đ</sup></td>
                <td>2.000.000<sup>đ</sup></td>
              </tr>
              {this.state.detailedBudgets.map((budget) => {
                console.log("test")
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
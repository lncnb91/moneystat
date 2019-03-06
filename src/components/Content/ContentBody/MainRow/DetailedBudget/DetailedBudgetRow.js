import React, { Component } from 'react'
import update from 'immutability-helper'

class DetailedBudgetRow extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.budget.category}</td>
        <td>{this.props.budget.description}</td>
        <td>{this.props.formatNumber(this.props.budget.expected_expense)}<sup>đ</sup></td>
        <td>{this.props.formatNumber(this.props.budget.spent)}<sup>đ</sup></td>
        <td>{this.props.formatNumber(this.props.budget.available)}<sup>đ</sup></td>
      </tr>
    );
  }
}

export default DetailedBudgetRow
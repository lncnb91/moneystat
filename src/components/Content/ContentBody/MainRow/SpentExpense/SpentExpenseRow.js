import React, { Component } from 'react'

class SpentExpenseRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.expense.user}</td>
        <td>{this.props.expense.date}</td>
        <td>{this.props.expense.category}</td>
        <td>{this.props.formatNumber(this.props.expense.amount)}<sup>đ</sup></td>
        <td>{this.props.expense.description}</td>
      </tr>
    )
  }
}

export default SpentExpenseRow
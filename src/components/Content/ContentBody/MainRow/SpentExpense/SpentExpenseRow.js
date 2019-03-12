import React, { Component } from 'react'

class SpentExpenseRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.transaction.user}</td>
        <td>{this.props.transaction.date}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.formatNumber(this.props.transaction.amount)}<sup>đ</sup></td>
        <td>{this.props.transaction.description}</td>
      </tr>
    )
  }
}

export default SpentExpenseRow
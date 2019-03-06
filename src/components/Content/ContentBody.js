import React, { Component } from 'react';
import axios from 'axios'
import update from 'immutability-helper'
import SmallBoxContainer from './ContentBody/SmallBoxContainer'
import MainRow from './ContentBody/MainRow'

class ContentBody extends Component {

  constructor(props) {
    super(props)
    this.state = {
      smallBox: {
        budget: 0,
        total_spent: 0,
        wallet_balance: 0,
        last_month_spent: 0
      }
    }
  }

  render() {
    return (
      <div>
        <SmallBoxContainer budget={this.props.smallBox.budget} 
          total_spent={this.props.smallBox.total_spent}
          wallet_balance={this.props.smallBox.wallet_balance} 
          last_month_spent={this.props.smallBox.last_month_spent} />
        <MainRow showLoader={this.props.showLoader}
          hideLoader={this.props.hideLoader}
          formatNumber={this.props.formatNumber}
          spendingByUser={this.props.spendingByUser}
          detailedBudgets={this.props.detailedBudgets}
          spentExpenses={this.props.spentExpenses} />
      </div>
    );
  }
}

export default ContentBody

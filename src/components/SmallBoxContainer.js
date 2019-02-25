import React, { Component } from 'react'
import SmallBox from './SmallBox'

class SmallBoxContainer extends Component {

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') 
  }

  render() {
    return (
      <div className="row">
        <SmallBox amount={this.formatNumber(this.props.budget)} title="Budget" 
          colorClass="bg-aqua" iconClass="ion-cash" />
        <SmallBox amount={this.formatNumber(this.props.total_spent)} title="Total spent" 
          colorClass="bg-green" iconClass="ion-ios-cart" />
        <SmallBox amount={this.formatNumber(this.props.wallet_balance)} title="Wallet balance" 
          colorClass="bg-yellow" iconClass="ion-home" />
        <SmallBox amount={this.formatNumber(this.props.last_month_spent)} title="Last month spent" 
          colorClass="bg-red" iconClass="ion-calendar" />
      </div>
    );
  }
}

export default SmallBoxContainer

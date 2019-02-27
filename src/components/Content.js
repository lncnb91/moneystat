import React, { Component } from 'react';
import axios from 'axios'
import update from 'immutability-helper'
import SmallBoxContainer from './SmallBoxContainer'
import MainRow from './MainRow'

class Content extends Component {

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

  componentDidMount() {
    axios.get('https://moneystat-api.herokuapp.com/api/v1/dashboards.json?wallet_id=1')
    .then(response => {
      const smallBox = update(this.state.smallBox, {$set: response.data.small_box})
      this.setState({smallBox: smallBox})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <SmallBoxContainer budget={this.state.smallBox.budget} 
          total_spent={this.state.smallBox.total_spent}
          wallet_balance={this.state.smallBox.wallet_balance} 
          last_month_spent={this.state.smallBox.last_month_spent} />
        <MainRow />
      </div>
    );
  }
}

export default Content

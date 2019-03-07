import React, { Component } from 'react'
import { Pie } from 'react-chartjs'

class SpendingByUserChart extends Component {
  convertResponseData = (response) => {
    return response.map(user => ({label: user.user_name, value: user.spent_amount}));
  }

  
  render(){
    return(
      <div className="box box-danger">
        <div className="box-header with-border">
          <h3 className="box-title">Spending by user</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="box-body" style={{textAlign: "center"}}>
          <Pie
            data={this.convertResponseData(this.props.spendingByUser)}
          />
        </div>
      </div>
    );
  }
}


export default SpendingByUserChart
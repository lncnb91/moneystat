import React, { Component } from 'react'
import ContentHeader from './Content/ContentHeader'
import ContentBody from './Content/ContentBody'

class Content extends Component {

	render() {
    return (
      <div className="content-wrapper">
        <ContentHeader />

        <section className="content">
          <ContentBody showLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            formatNumber={this.props.formatNumber}
            smallBox={this.props.smallBox}
            spendingByUser={this.props.spendingByUser}
            detailedBudgets={this.props.detailedBudgets}
            transactions={this.props.transactions}
            monthlySpending={this.props.monthlySpending} />
        </section>
      </div>
    );
  }
}

export default Content

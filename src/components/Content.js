import React, { Component } from 'react'
import ContentHeader from './Content/ContentHeader'
import ContentBody from './Content/ContentBody'

class Content extends Component {

  componentDidUpdate(prevProps) {
    console.log("Content Updated")
    console.log(this.props.detailedBudgets)
  }

	render() {
    return (
      <div className="content-wrapper">
        <ContentHeader />

        <section className="content">
          <ContentBody showLoader={this.props.showLoader}
            hideLoader={this.props.hideLoader}
            smallBox={this.props.smallBox}
            spendingByUser={this.props.spendingByUser}
            detailedBudgets={this.props.detailedBudgets}
            spentExpense={this.props.spentExpense} />
        </section>
      </div>
    );
  }
}

export default Content

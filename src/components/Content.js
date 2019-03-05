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
            smallBox={this.props.smallBox} />
        </section>
      </div>
    );
  }
}

export default Content

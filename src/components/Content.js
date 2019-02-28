import React, { Component } from 'react'
import ContentHeader from './Content/ContentHeader'
import ContentBody from './Content/ContentBody'

class Content extends Component {
	render() {
    return (
      <div className="content-wrapper">
        <ContentHeader />

        <section className="content">
          <ContentBody />
        </section>
      </div>
    );
  }
}

export default Content

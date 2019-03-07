import React, { Component } from 'react'

class ContentHeader extends Component {
  render() {
    return ( 
      <div>    
        <section className="content-header"> 
          <h1>
            2019 February
          </h1>
          <ol className="breadcrumb">
            <li><a href="_blank"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
      </div>
    );
  }
}

export default ContentHeader
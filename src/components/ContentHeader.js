import React, { Component } from 'react'

class ContentHeader extends Component {
  render() {
    return ( 
      <div>     
        <h1>
          2019 February
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          <li className="active">Dashboard</li>
        </ol>
      </div>
    );
  }
}

export default ContentHeader
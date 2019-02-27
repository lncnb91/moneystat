import React, { Component } from 'react'

class Loader extends Component {
  render() {
    return (
    	<div id="loading">
    	  <div id="loading-icon">
    	    <i class="fa fa-spinner fa-spin fa-3x fa-fw" style={{font-size: "100px", color: "#3c8dbc"}}></i>
    	  </div>
    	</div>
    );
  }
}

export default Loader

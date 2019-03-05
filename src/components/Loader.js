import React, { Component } from 'react'

class Loader extends Component {
  render() {
    return (
    	<div id="loader" style={{display: this.props.display}}>
    	  <div id="loader-icon">
    	    <i className="fa fa-spinner fa-spin fa-3x fa-fw" style={{fontSize: "100px", color: "#3c8dbc"}}></i>
    	  </div>
    	</div>
    );
  }
}

export default Loader

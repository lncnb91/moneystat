import React, { Component } from 'react'

class SmallBox extends Component {
  render() {
    return (
      <div className="col-lg-3 col-xs-6">
        <div className={`small-box ${this.props.colorClass}`}>
          <div className="inner">
            <h3>{this.props.amount}<sup>đ</sup></h3>

            <p>{this.props.title}</p>
          </div>
          <div className="icon">
            <i className={`ion ${this.props.iconClass}`}></i>
          </div>
          <a href="_blank" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
    );
  }
}

export default SmallBox
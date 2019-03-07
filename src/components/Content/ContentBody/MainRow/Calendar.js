import React, { Component } from 'react'

class Calendar extends Component {
  render() {
    return (
      <div className="box box-solid bg-green-gradient">
        <div className="box-header">
          <i className="fa fa-calendar"></i>

          <h3 className="box-title">Calendar</h3>
          <div className="pull-right box-tools">
            <div className="btn-group">
              <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bars"></i></button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="_blank">Add new event</a></li>
                <li><a href="_blank">Clear events</a></li>
                <li className="divider"></li>
                <li><a href="_blank">View calendar</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <div className="box-body no-padding">
          <div id="calendar" style={{width: "100%"}}></div>
        </div>
      </div>
    );
  }
}

export default Calendar
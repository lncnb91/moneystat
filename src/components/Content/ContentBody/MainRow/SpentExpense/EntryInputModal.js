import React, { Component } from 'react'

class EntryInputModal extends Component {
  render() {
    return (
      <div className="modal fade" id="modal-default">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Add expense</h4>
            </div>
            <div className="modal-body">
              <div className="box-body">
                <div className="form-group">
                  <label>User:</label>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user" style={{width: "15px"}}></i></span>
                    <select className="form-control select2" style={{width: "100%"}} defaultValue="Ngọc Cường">
                      <option>Ngọc Cường</option>
                      <option>Thu Hường</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Category:</label>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-folder-open-o" style={{width: "15px"}}></i></span>
                    <select className="form-control select2" style={{width: "100%"}} defaultValue="Food & Drink">
                      <option>Food & Drink</option>
                      <option>Bills & Utilities</option>
                      <option>Transportation</option>
                      <option>Shopping</option>
                      <option>Entertainment</option>
                      <option>Travel</option>
                      <option>Health & Fitness</option>
                      <option>Family</option>
                      <option>Education</option>
                      <option>Investment</option>
                      <option>Insurances</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description:</label>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-pencil-square-o" style={{width: "15px"}}></i></span>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Date:</label>

                  <div className="input-group date">
                    <span className="input-group-addon"><i className="fa fa-calendar" style={{width: "15px"}}></i></span>
                    <input type="text" className="form-control pull-right" id="datepicker" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Money amount:</label>

                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-dollar" style={{width: "15px"}}></i></span>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryInputModal
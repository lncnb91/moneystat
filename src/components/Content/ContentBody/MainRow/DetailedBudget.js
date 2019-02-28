import React, { Component } from 'react'

class DetailedBudget extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Detailed budget</h3>
        </div>
        <div className="box-body table-responsive table-bordered">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>Category</th>
                <th>Expected expense</th>
                <th>Spent</th>
                <th>Available</th>
              </tr>
              <tr>
                <td>Bank debt</td>
                <td>12.000.000<sup>đ</sup></td>
                <td>0<sup>đ</sup></td>
                <td>12.000.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Food & Drink</td>
                <td>3.000.000<sup>đ</sup></td>
                <td>1.500.000<sup>đ</sup></td>
                <td>1.500.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Gasolin</td>
                <td>300.000<sup>đ</sup></td>
                <td>100.000<sup>đ</sup></td>
                <td>200.000<sup>đ</sup></td>
              </tr>
              <tr>
                <td>Insurances</td>
                <td>2.000.000<sup>đ</sup></td>
                <td>0<sup>đ</sup></td>
                <td>2.000.000<sup>đ</sup></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-footer clearfix no-border">
          <button type="button" className="btn btn-default pull-right" data-toggle="modal" data-target="#modal-default"><i className="fa fa-plus"></i>
            Add item
          </button>
        </div>
      </div>
    );
  }
}

export default DetailedBudget
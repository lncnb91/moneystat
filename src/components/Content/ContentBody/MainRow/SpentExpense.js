import React, { Component } from 'react'
import EntryInputModal from './SpentExpense/EntryInputModal'

class SpentExpense extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Spent expenses</h3>

          <div className="box-tools">
            <div className="input-group input-group-sm" style={{width: "150px"}}>
              <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-body table-responsive table-bordered">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Ngọc Cường</td>
                <td>20-2-2019</td>
                <td>Food & Drink</td>
                <td>30.000<sup>đ</sup></td>
                <td>Ăn bún bò giò ốc tại Keang Nam</td>
              </tr>
              <tr>
                <td>Thu Hường</td>
                <td>20-2-2019</td>
                <td>Insurances</td>
                <td>2.000.000<sup>đ</sup></td>
                <td>Đóng bảo hiểm tháng 2 cho Hường và Cún</td>
              </tr>
              <tr>
                <td>Ngọc Cường</td>
                <td>20-2-2019</td>
                <td>Family</td>
                <td>299.000<sup>đ</sup></td>
                <td>Mua quà đầy 2 tháng tuổi cho cò</td>
              </tr>
              <tr>
                <td>Thu Hường</td>
                <td>19-1-2019</td>
                <td>Family</td>
                <td>20.000.000<sup>đ</sup></td>
                <td>Tặng bố chồng 20 củ tiêu tết</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-footer clearfix no-border">
          <button type="button" className="btn btn-default pull-right" data-toggle="modal" data-target="#modal-default"><i className="fa fa-plus"></i>
            Add item
          </button>
        </div>
        <EntryInputModal />
      </div>
    );
  }
}

export default SpentExpense
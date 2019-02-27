import React, { Component } from 'react'
import EntryInputModal from './EntryInputModal'

class MainRow extends Component {
  render() {
    return (
      <div className="row">
        <section className="col-lg-9 connectedSortable">

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
        </section>

        <section className="col-lg-3 connectedSortable">
          {/* DONUT CHART */}
          <div className="box box-danger">
            <div className="box-header with-border">
              <h3 className="box-title">Spending by user</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <canvas id="pieChart" style={{height: "250px"}}></canvas>
            </div>
          </div>

          <div className="box box-solid bg-teal-gradient">
            <div className="box-header">
              <i className="fa fa-th"></i>

              <h3 className="box-title">Monthly Spending</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="box-body border-radius-none">
              <div className="chart" id="line-chart" style={{height: "250px"}}></div>
            </div>
          </div>

          <div className="box box-solid bg-green-gradient">
            <div className="box-header">
              <i className="fa fa-calendar"></i>

              <h3 className="box-title">Calendar</h3>
              <div className="pull-right box-tools">
                <div className="btn-group">
                  <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bars"></i></button>
                  <ul className="dropdown-menu pull-right" role="menu">
                    <li><a href="#">Add new event</a></li>
                    <li><a href="#">Clear events</a></li>
                    <li className="divider"></li>
                    <li><a href="#">View calendar</a></li>
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

        </section>
      </div>
    );
  }
}

export default MainRow
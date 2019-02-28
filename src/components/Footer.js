import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            <b>Version</b> 2.4.0
          </div>
          <strong>Copyright &copy; 2019 <a href="https://adminlte.io">Lê Ngọc Cường</a>.</strong> All rights
          reserved.
        </footer>
      </div>
    );
  }
}

export default Footer
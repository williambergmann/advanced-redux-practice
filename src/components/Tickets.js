import React from 'react';
import {connect} from 'react-redux';

function Tickets(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-red">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-support fa-5x"></i>
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{props.tickets}</div>
              <div>Support Tickets!</div>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
            <div className="clearfix"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    tickets: state.tickets
  };
};
//export default (Tickets);
export default connect(mapStateToProps,null)(Tickets);



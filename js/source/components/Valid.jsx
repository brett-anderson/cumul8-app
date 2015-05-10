var React          = require('react'),
    TimesheetStore = require('../stores/TimesheetStore'),
    Link           = require('react-router').Link,
    State          = require('react-router').State;

var Record = React.createClass({
  render: function() {
    return (
      <tr> 
        <td>{this.props.email}</td>
        <td>{this.props.time}</td>
        <td>{this.props.type}</td>
      </tr>
    )
  }
})


var Valid = React.createClass({
  mixins: [State],

  getInitialState: function() {
    var fields = TimesheetStore.getFields();
    var records = TimesheetStore.getRecords();
    return {
      email: fields.email,
      time: fields.time,
      message: fields.message,
      records: records
    }
  },

  render: function() {
    var records = this.state.records.map(function (record) {
      return (
        <Record key={record.id} email={record.email} time={record.time} type={record.type}  />
      )
    });
    return (
      <div className="row">
        <div className="col-md-4 col-centered box text-center valid">
          <i className="fa fa-check fa-5x"/>
          <p>Thank you <strong>{this.state.email}</strong></p>
          <p>You have logged {this.state.time} today</p>
          <table className="table text-left table-condensed">
            <th>Email</th>
            <th>Time</th>
            <th>Type</th>
            {records}
          </table>
          <Link className="btn btn-default" to="addTime">Add another? </Link>
        </div>
      </div>
    )
  }
});

module.exports = Valid;
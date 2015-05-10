var React          = require('react'),
    TimesheetStore = require('../stores/TimesheetStore'),
    Link           = require('react-router').Link,
    State          = require('react-router').State;

var Valid = React.createClass({
  mixins: [State],

  getInitialState: function() {
    var fields = TimesheetStore.getFields();
    var records = TimesheetStore.getRecords();
    console.log(fields);
    return {
      email: fields.email,
      time: fields.time,
      message: fields.message,
      records: records
    }
  },

  render: function() {
    var recordNodes = this.state.records.map(function (record) {
      return (
        <tr key={record.id}> 
          <td>{record.email}</td>
          <td>{record.time}</td>
          <td>{record.type}</td>
        </tr>
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
            {recordNodes}
          </table>
          <Link className="btn btn-default" to="addTime">Add another? </Link>
        </div>
      </div>
    )
  }
});

module.exports = Valid;
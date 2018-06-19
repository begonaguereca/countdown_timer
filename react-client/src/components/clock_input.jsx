import React from 'react';


class Clock_input extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    this.passUpStart = this.passUpStart.bind(this);
    this.passUpEnd = this.passUpEnd.bind(this);
  }

  passUpStart(event) {
    // this.setState({start: event.target.value});
     //console.log(.start)
    this.props.handleStart(event.target.value);
  }

  passUpEnd(event) {
    //this.setState({end: event.target.value});
    this.props.handleEnd(event.target.value);
  }



  render () {
    return (
    <div>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">Start Time</span>
        </div>
        <input type="text" value={this.props.start} onChange={this.passUpStart} id="example-time-input" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
      </div>

      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">End Time</span>
        </div>
        <input type="text" value={this.props.end} onChange={this.passUpEnd} className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
      </div>

    </div>
  )}
}

export default Clock_input;

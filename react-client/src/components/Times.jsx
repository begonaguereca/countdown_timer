import React from 'react';
// import { TimePicker } from 'antd';
// import moment from 'moment';

class Times extends React.Component{
  constructor(props) {
    super(props);
    this.passUpStart = this.passUpStart.bind(this);
    this.passUpEnd = this.passUpEnd.bind(this);
  }

  passUpStart(event) {
    this.props.handleStart(event.target.value);
  }

  passUpEnd(event) {
    this.props.handleEnd(event.target.value);
  }
  render () {
    return (
    <div className="row align-items-center">
      <div className="col-md-12">

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

{/*
    <div className="row align-items-center">
      <div className="col-md-3 times">
        <div className="form-group">
          <span className="input-group-text" id="inputGroup-sizing-lg">Start Time</span>
        </div>
      </div>

      <div className="col-md-3 times">
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option defaultValue>HH</option>
            {hours.map((hours, i) => <option key={i}>{hours}</option>)}
          </select>
        </div>
      </div>

      <div className="col-md-3 times">
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option defaultValue>MM</option>
            {seconds.map((minutes,i) => <option key={i}>{minutes}</option>)}
          </select>
        </div>
      </div>
      <div className="col-md-3 times">
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option defaultValue>SS</option>
              {seconds.map((item,i) => <option key={i}>{item}</option>)}
          </select>
        </div>
      </div>
    </div> */}


      </div>
    </div>
  )}
}

export default Times;


////////////////////////////////////////
let hours = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24']


let seconds = [
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59' ]

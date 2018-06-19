import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Clock_input from './components/clock_input.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "00:00:00",
      end: "00:00:00",
      watch: "00:00:00"
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleStart(updated) {
    this.setState({start: updated});
  }

  handleEnd(upadted) {
    this.setState({end: updated});
  }


  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
    <div className="container-fluid">

      <div className="row align-items-center">
        <div className="col-md-12">
          <h1 className="text-center">Simple Countdown Timer</h1>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-12">
          <Clock_input start={this.state.start} end={this.state.end} handleStart={this.handleStart} handleEnd={this.handleEnd}/>
        </div>
      </div>

    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));

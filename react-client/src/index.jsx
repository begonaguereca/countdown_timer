
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Times from './components/Times.jsx';
import Buttons from './components/Buttons.jsx';
import Clock from './components/Clock.jsx';
import Header from './components/Header.jsx';
import Helper from './helper/helper.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "00:00:00",
      end: "00:00:00",
      time: "00:00:00",
      stop: false
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.clearTime = this.clearTime.bind(this);
  }

  handleStart(updated) {
    this.setState({start: updated});
  }

  handleEnd(updated) {
    this.setState({end: updated});
  }

  decrementTime() {
    Helper.twoVals();

    let validInput = Helper.checkValidEntry(this.state.start, this.state.end);

    if(validInput) {
      let diff = Helper.subtractTimes(this.state.start, this.state.end);
      this.setState({time: diff});

      let arrTime = diff.split(':'),
      sec = parseInt(arrTime[2]),
      min = parseInt(arrTime[1]),
      hours = parseInt(arrTime[0]);

      var reduceTime = setInterval(() => {
        if(this.state.stop) {
          clearInterval(reduceTime);
          this.setState({stop: false});
        } else {
          if(sec > 0) {
            sec--;
          } else if (!sec && min && !hours) {
            sec = 59;
            min--;
          } else if (!sec && min && hours) {
            sec = 59;
            min--;
          }else if (!sec && !min && hours) {
            sec = 59;
            min = 59;
            hours--;
          } else {
            clearInterval(reduceTime);
          }
          let newTime = Helper.twoVals(hours) + ':' + Helper.twoVals(min) + ':' + Helper.twoVals(sec);
          this.setState({time: newTime});
        }
      }, 1000);
    }
  }

  clearTime() {
    this.setState({stop: true});
    this.setState({time: "00:00:00"});
    this.setState({start: "00:00:00"});
    this.setState({end: "00:00:00"});
  }


  render () {
    return (
    <div className="container-fluid">
      <Header />
      <Clock time={this.state.time} />
      <Times start={this.state.start} end={this.state.end} handleStart={this.handleStart} handleEnd={this.handleEnd} />
      <Buttons start = {this.state.start} time={this.state.time} firstTime={this.setInitialTime} clearTime={this.clearTime} decrement={this.decrementTime} />
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));

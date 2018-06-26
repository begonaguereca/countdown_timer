import React from 'react';


class Start_Clear_Buttons extends React.Component{
  constructor(props) {
    super(props);
    this.start_handleClick = this.start_handleClick.bind(this);
    this.end_handleClick = this.end_handleClick.bind(this);
  }

  start_handleClick() {
    this.props.decrement();
  }

  end_handleClick() {
    this.props.clearTime();
  }

  render () {
    return (

    <div className="row align-items-center buttons">
      <div className="col-md-6">
        <button type="button" onClick={this.start_handleClick} className="btn btn-primary btn-lg btn-block">Start Countdown</button>
      </div>

      <div className="col-md-6">
        <button type="button" onClick={this.end_handleClick} className="btn btn-secondary btn-lg btn-block">Reset</button>
      </div>
    </div>
  )}
}

export default Start_Clear_Buttons;

import React from 'react';

const Clock = (props) => (
  <div>
    <div className="row align-items-center">
      <div className="col-md-12">
        <div id='clock' className="text-center">{props.time}</div>
      </div>
    </div>

    <div id='description' className="row">
      <div className="col-md-4 hours">
        <div className="text-right">HOURS</div>
      </div>
      <div className="col-md-4 minutes">
        <div className="text-center">MINUTES</div>
      </div>
      <div className="col-md-4 seconds">
        <div className="text-left">SECONDS</div>
      </div>
    </div>
  </div>
)

export default Clock;

import React from 'react';
import './Habit.scss';
function Habit (props) {
  return (
    <div id='habit'>
      <div className="habitHeader">

      </div>
      <div className="habitContent">
        {props.title}
      </div>
      <div className="habitFooter">
        {props.createDate}
      </div>
    </div>
  );
}

export default Habit;

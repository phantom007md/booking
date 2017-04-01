import React, { Component } from 'react';
import '../assets/_App.css';

class ChildAge extends Component {
  render() {
    return (
      <span>
        <div className="child-age-wrap">
          <span>child </span>
          <span>childNum</span>
          <span>age</span>
          <select className="child-age">
            <option>2 YEAR</option>
            <option>3 YEAR</option>
            <option>4 YEAR</option>
            <option>5 YEAR</option>
            <option>6 YEAR</option>
            <option>7 YEAR</option>
          </select>
        </div>
      </span>
    );
  }
}

export default ChildAge;

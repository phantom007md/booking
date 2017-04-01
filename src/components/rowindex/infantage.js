import React, { Component } from 'react';
import '../assets/_App.css';

class InfantAge extends Component {
  render() {
    return (
      <span>
        <div className="infant-age-wrap">
          <span>infant </span>
          <span>infantNum</span>
          <span>age</span>
          <select className="infant-age">
            <option>0 YEAR </option>
            <option>1 YEAR</option>
            <option>2 YEAR</option>
          </select>
        </div>
      </span>
    );
  }
}

export default InfantAge;

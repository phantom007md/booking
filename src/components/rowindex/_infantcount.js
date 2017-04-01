import React, { Component } from 'react';
import '../assets/_App.css';

class InfantCount extends Component {
  render() {
    return (
      <span>
        <span>infant count:</span>
        <select className="infant-count">
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </span>
    );
  }
}

export default InfantCount;

import React, { Component } from 'react';
import '../assets/_App.css';

class AdoultCount extends Component {
  render() {
    return (
      <span>
        <span>adult count:</span>
        <select className="adult-count">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </span>
    );
  }
}

export default AdoultCount;

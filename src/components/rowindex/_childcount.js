import React, { Component } from 'react';
import '../assets/_App.css';

class ChildCount extends Component {
  render() {
    return (
      <span>
        <span>child count:</span>
        <select onChange={this.props.handler} className="child-count">
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </span>
    );
  }
}

export default ChildCount;

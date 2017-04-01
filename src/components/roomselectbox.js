import React, { Component } from 'react';
import './assets/_App.css';

class RoomSelectBox extends Component {
  render() {
    return (
      <div className="room-select-wrap">
        <select className="room-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    );
  }
}

export default RoomSelectBox;

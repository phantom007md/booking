import React, { Component } from 'react';
import RoomSelectBox from './roomselectbox';
import Submit from './submit';
import RowIndex from './rowindex/rowindex';
import './assets/_App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <RoomSelectBox />
        <RowIndex />
        <Submit />
      </div>
    );
  }
}

export default App;

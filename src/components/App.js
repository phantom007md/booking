import React, { Component } from 'react';
import './_App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="room-select-wrap">
          <select className="room-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="row-index-wrap">

        </div>
        <div className="submit-wrap">
          <button type="submit" className="btn">SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default App;

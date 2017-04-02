import React, { Component } from 'react';
import './assets/_App.css';

class Submit extends Component {
  render() {
    return (
      <div className="submit-wrap">
        <button onClick={this.props.handler} type="submit" className="btn">SUBMIT</button>
      </div>
    );
  }
}

export default Submit;

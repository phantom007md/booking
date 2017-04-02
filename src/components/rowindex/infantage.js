import React, { Component } from 'react';
import '../assets/_App.css';

class InfantAge extends Component {

  infantAgeGetter = (e)=>{
    let val = e.target.value;
    this.props.handler({value:val, id:this.props.infantNum});
  }

  render() {
    return (
      <span>
        <div className="infant-age-wrap">
          <span>infant </span>
          <span>infantNum</span>
          <span>age</span>
          <select onChange={this.infantAgeGetter} className="infant-age">
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

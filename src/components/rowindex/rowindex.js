import React, { Component } from 'react';
import AdoultCount from './_adoultcount';
import ChildCount from './_childcount';
import InfantCount from './_infantcount';
import ChildAge from './childage';
import InfantAge from './infantage';
import '../assets/_App.css';

class RowIndex extends Component {
  render() {
    return (
      <div className="row-index-wrap">
        <div className="row-index">
          <span className="row-id">num</span>
          <div className="row">
            <div className="count-select">
              <AdoultCount />
              <ChildCount />
              <InfantCount />
            </div>
            <div className="age-select">
              <div className="child-select">
                <ChildAge />
              </div>
              <div className="infant-select">
                <InfantAge />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowIndex;

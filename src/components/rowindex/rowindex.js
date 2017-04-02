import React, { Component } from 'react';
import AdoultCount from './_adoultcount';
import ChildCount from './_childcount';
import InfantCount from './_infantcount';
import ChildAge from './childage';
import InfantAge from './infantage';
import '../assets/_App.css';

class RowIndex extends Component {

  roomRow = {
    id: this.props.num,
    adoultAmt: this.props.adoultCount,
    childAmt: this.props.childCount,
    infantAmt: this.props.infantCount,
    childs:[],
    infants: []
  }

  childs = [];

  infants = [];

  SelectAdoultCount = (e)=>{
    this.roomRow.adoultAmt = parseInt(e.target.value);
    this.props.handler(this.roomRow);
  }

  SelectChildCount = (e)=>{
    this.roomRow.childAmt = parseInt(e.target.value);
    let childsLength = this.childs.length;
    if (this.roomRow.childAmt == childsLength) {
      return
    }else if(this.roomRow.childAmt > childsLength){
      const nChild = this.roomRow.childAmt - childsLength;
      for (let i = 0; i < nChild; i++) {
        this.childs.push({id:i + childsLength + 1, age:"2 YEAR"});
      }
      this.roomRow.childs = this.childs;
    }else if(this.roomRow.childAmt < childsLength) {
      this.childs = this.childs.filter(({ id }) =>  id<=this.roomRow.childAmt );
      this.roomRow.childs = this.childs;
    }
    this.props.handler(this.roomRow);
  }

  SelectInfantCount = (e)=>{
    this.roomRow.infantAmt = parseInt(e.target.value);
    let infantsLength = this.infants.length;
    if (this.roomRow.infantAmt == infantsLength) {
      return
    }else if(this.roomRow.infantAmt > infantsLength){
      const nInfant = this.roomRow.infantAmt - infantsLength;
      for (let i = 0; i < nInfant; i++) {
        this.infants.push({id:i + infantsLength + 1, age:"0 YEAR"});
      }
      this.roomRow.infants = this.infants;
    }else if(this.roomRow.infantAmt < infantsLength) {
      this.childs = this.childs.filter(({ id }) =>  id<=this.roomRow.infantAmt );
      this.roomRow.infants = this.infants;
    }
    this.props.handler(this.roomRow);
  }

  childAgeSelect = ({ id, value }) =>{
    let index = id - 1;
    this.childs[index].age = value;
    this.roomRow.childs = this.childs;
    this.props.handler(this.roomRow);
  }

  infantAgeSelect = ({ id, value }) =>{
    let index = id - 1;
    this.infants[index].age = value;
    this.roomRow.infants = this.infants;
    this.props.handler(this.roomRow);
  }

  render() {
    return (
      <div className="row-index-wrap">
        <div className="row-index">
          <span className="row-id">{this.props.num}</span>
          <div className="row">
            <div className="count-select">
              <AdoultCount handler={this.SelectAdoultCount} />
              <ChildCount handler={this.SelectChildCount} />
              <InfantCount handler={this.SelectInfantCount} />
            </div>
            <div className="age-select">
              <div className="child-select">
                {
                  this.childs.map(({ id })=>(
                    <ChildAge
                    key={id} childNum={id}
                    handler={this.childAgeSelect}
                    />
                  ))
                }
              </div>
              <div className="infant-select">
                {
                  this.infants.map(({ id })=>(
                    <InfantAge
                    key={id} infantNum={id}
                    handler={this.infantAgeSelect}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowIndex;

import React, { Component } from 'react';
import RoomSelectBox from './roomselectbox';
import Submit from './submit';
import RowIndex from './rowindex/rowindex';
import './assets/_App.css';

class App extends Component {

  state = {
    roomRows: [
      {
        id: 1,
        adoultCount: 0,
        childCount: 0,
        infantCount: 0,
        childs:[],
        infants:[]
      }
    ]
  }

  roomCount= 1;

  rooms= [];

  e = {
    target: {
      value: 1
    }
  }

  constructor() {
    super();
    this.RoomSelectHandler(this.e);
  }

  RoomSelectHandler = (e) =>{
    this.roomCount = e.target.value;
    this.rooms = this.state.roomRows;
    let roomRowLength = this.rooms.length;
    if (this.roomCount === roomRowLength) {
      console.log('no change in the room number!');
      return
    }else if(this.roomCount > roomRowLength){
      const nRoom = this.roomCount - roomRowLength;
      for (let i = 0; i < nRoom; i++) {
        this.rooms.push(
            {id: roomRowLength + i + 1,
             adoultCount: 0, childCount: 0, infantCount: 0}
           );
      }
    }else if(this.roomCount < roomRowLength) {
      this.rooms = this.rooms.filter(({ id }) =>  id<=this.roomCount );
    }
    this.setState({roomRows: this.rooms});
  }

  roomGetInfo = (roomRow) =>{
    let room = this.rooms[roomRow.id - 1];
    room.adoultCount = roomRow.adoultAmt;
    room.childCount = roomRow.childAmt;
    room.infantCount = roomRow.infantAmt;
    room.childs = roomRow.childs;
    room.infants = roomRow.infants;
    this.setState({roomRows: this.rooms});
  }

  exportJSON= () =>{
    let xportedJSON = JSON.stringify(this.state.roomRows);
    console.info(xportedJSON);
  }

  render() {
    return (
      <div className="wrapper">
        <RoomSelectBox handler={this.RoomSelectHandler} />
        {
          this.state.roomRows.map(
            ({ id, adoultCount, childCount, infantCount }) => (
                <RowIndex
                  handler={this.roomGetInfo} key={id}
                  num={id} adoultCount={adoultCount}
                  childCount={childCount} infantCount={infantCount}
                />)
          )
        }
        <Submit handler={this.exportJSON} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

// components
import Grid from "./Grid.js"
import Controls from './Controls';

class App extends Component{
  constructor(){
    super();
    this.state = {
      rows: [],
      color: ''
    };
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeCol = this.removeCol.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this);
    this.fillAll = this.fillAll.bind(this);
    this.clear = this.clear.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  addRow() {
    let existingRows = this.state.rows;
    if (existingRows.length === 0){
      let newCol = "placeholder";
      let newRow = [];
      newRow.push(newCol);
      existingRows.push(newRow);
    }
    else{
      let newRow = [];
      for (let i = 0; i < existingRows[0].length; i++){
        let newCol = "placeholder";
        newRow.push(newCol);
      }
      existingRows.push(newRow);
    }
    this.setState({rows: existingRows});
  }

  addCol() {
    const rows = [...this.state.rows];
    rows.forEach(row => row.push('placeholder'));
    console.log(rows);
    this.setState({ rows });
  };
  removeRow() {
    console.log('removerow');
  }
  removeCol() {
    console.log('removecol');
  }
  fillUncolored() {
    console.log('filluncolored');
  }
  fillAll() {
    console.log('fillall');
  }
  clear() {
    console.log('clear');
  }
  chooseColor({ target }) {
    const color = target.value.toLowerCase();
    this.setState({ color });
    console.log(color);
  }

  render(){
    const { addRow, addCol, removeRow, removeCol, fillUncolored, fillAll, clear, chooseColor } = this;
    const { rows } = this.state;
    return(
      <div>
        <Controls 
          addRow={ addRow }
          addCol={ addCol }
          removeRow={ removeRow }
          removeCol={ removeCol }
          fillUncolored={ fillUncolored }
          fillAll={ fillAll }
          clear={ clear }
          chooseColor={ chooseColor }
        />

        <Grid 
          rows={rows} 
        />
      </div>
    );
  }
}

export default App;

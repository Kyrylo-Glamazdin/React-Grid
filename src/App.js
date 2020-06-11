import React, {Component} from 'react';
import Grid from "./Components/Grid.js"

class App extends Component{
  constructor(){
    super();
    this.state = {
      rows: []
    };
  }

  addRow = () => {
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

  render(){
    return(
      <div>
        <button onClick = {this.addRow}>Add Row</button>
      <Grid rows={this.state.rows} />
      </div>
    );
  }
}

export default App;

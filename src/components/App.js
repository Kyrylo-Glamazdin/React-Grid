import React, {Component} from 'react';

// components
import Grid from "./Grid.js"
import Controls from './Controls';

class App extends Component{
  constructor(){
    super();
    this.state = {
      rows: [],
      color: '#E9EEF7',
      activeDrawing: false
    };

    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeCol = this.removeCol.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this);
    this.fillAll = this.fillAll.bind(this);
    this.clear = this.clear.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.setCellColor = this.setCellColor.bind(this);
    this.activeColoring = this.activeColoring.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setInactive = this.setInactive.bind(this);
  }

  addRow() {
    let existingRows = this.state.rows;
    if (existingRows.length === 0){
      let newCol = "#E9EEF7";
      let newRow = [];
      newRow.push(newCol);
      existingRows.push(newRow);
    }
    else{
      let newRow = [];
      for (let i = 0; i < existingRows[0].length; i++){
        let newCol = "#E9EEF7";
        newRow.push(newCol);
      }
      existingRows.push(newRow);
    }
    this.setState({rows: existingRows});
  }

  addCol() {
    const rows = [...this.state.rows];
    if (rows.length === 0){
      let newRow = [];
      let newCol = "#E9EEF7";
      newRow.push(newCol);
      rows.push(newRow);
    }
    else{
      rows.forEach(row => row.push("#E9EEF7"));
    }
    this.setState({ rows });
  };

  removeRow() {
    let {rows} = this.state;
    rows.pop();
    this.setState({rows});
  }

  removeCol() {
    let {rows} = this.state;
    for (let i = 0; i < rows.length; i++){
      rows[i].pop();
    }
    if (!rows[0] || rows[0].length === 0){
      this.setState({rows: []});
    }
    else{
      this.setState({rows});
    }
  }

  fillUncolored() {
    let {rows} = this.state;
    for (let i = 0; i < rows.length; i++){
      for (let j = 0; j < rows[i].length; j++){
        if (rows[i][j] === "#E9EEF7"){
          rows[i][j] = this.state.color;
        }
      }
    }
    this.setState({rows});
  }
  fillAll() {
    let {rows} = this.state;
    for (let i = 0; i < rows.length; i++){
      for (let j = 0; j < rows[i].length; j++){
        rows[i][j] = this.state.color;
      }
    }
    this.setState({rows});
  }

  clear() {
    let {rows} = this.state;
    for (let i = 0; i < rows.length; i++){
      for (let j = 0; j < rows[i].length; j++){
        rows[i][j] = "#E9EEF7";
      }
    }
    this.setState({rows});
  }

  chooseColor({ target }) {
    const color = target.value.toLowerCase();
    this.setState({ color });
  }

    setCellColor(i, j, color) {
        const { rows } = this.state;
        rows[i][j] = color;
        this.setState({ rows });
    }

    activeColoring(i, j, color, activeDrawing) {
        if (activeDrawing) {
            const { rows } = this.state;
            rows[i][j] = color;
            this.setState({ rows });
        }
    }

    setActive() {
        let { activeDrawing } = this.state;
        activeDrawing = true;
        this.setState({ activeDrawing });
    }

    setInactive() {
        let { activeDrawing } = this.state;
        activeDrawing = false;
        this.setState({ activeDrawing });
    }

  render(){
    const { addRow, addCol, removeRow, removeCol, fillUncolored, fillAll, clear, chooseColor, setCellColor, activeColoring, setActive, setInactive } = this;
    const { rows, color, activeDrawing } = this.state;
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
                rows={rows} color={color} setCellColor={setCellColor} activeColoring={activeColoring} setActive={setActive} activeDrawing={activeDrawing} setInactive={setInactive}
        />
      </div>
    );
  }
}

export default App;

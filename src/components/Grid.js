import React from 'react';
import Row from './Row.js';
import '../styles/Grid.css';

//the Grid component represents the entire grid with all of the rows and columns
const Grid = ({ rows, color, setCellColor, setActive, activeColoring, activeDrawing, setInactive }) => {
    
    return(
        <main className="main-grid">
            {rows.map((col, index) => (<Row key={index} cols={col} color={color} indexr={index} setCellColor={setCellColor} setActive={setActive} activeColoring={activeColoring} activeDrawing={activeDrawing}setInactive = {setInactive}/>))}
        </main>
    )
};

export default Grid;
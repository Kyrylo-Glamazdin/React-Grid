import React from 'react';
import Row from './Row.js';
import '../styles/Grid.css';

//the Grid component represents the entire grid with all of the rows and columns
const Grid = ({ rows, color, setCellColor, setActive, activeColoring, activeDrawing, setInactive }) => {
    
    return(
        <main
            className="main-grid"
            //if mouse leaves gird, sets activeDrawing to false
            onMouseLeave={function () { setInactive() }}
            //if mouseup in grid, sets activeDrawing to false
            onMouseUp={function () { setInactive() }}
        >
            {rows.map((col, index) => (<Row
                key={index}
                cols={col}
                color={color}
                indexr={index}
                setCellColor={setCellColor}
                setActive={setActive}
                activeColoring={activeColoring}
                activeDrawing={activeDrawing}
                setInactive={setInactive} />))}

        </main>
    )
};

export default Grid;
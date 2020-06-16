import React, {Component} from 'react';
import Row from './Row.js';

const Grid = ({ rows, color, setCellColor, setActive, activeColoring, activeDrawing, setInactive }) => {
    
    return(
        <main onMouseLeave={function () { setInactive() }} onMouseUp={function () { setInactive() }}>
            {rows.map((col, index) => (<Row key={index} cols={col} color={color} indexr={index} setCellColor={setCellColor} setActive={setActive} activeColoring={activeColoring} activeDrawing={activeDrawing}setInactive = {setInactive} />))}
        </main>
    )
};

export default Grid;
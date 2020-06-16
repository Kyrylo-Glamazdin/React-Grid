import React, {Component} from 'react';
import Row from './Row.js';

const Grid = ({ rows, color, setCellColor }) => {
    
    return(
        <main>
        <h1>So I'm thinking the color of each cell must be the actual value stored in the corresponding cell in the array. Then each Col element would set its backgroundColor propertly by using the value stored in that place in 'rows' array</h1>
            {rows.map((col, index) => (<Row key={index} cols={col} color={color} indexr={index} setCellColor={setCellColor}/>))}
        </main>
    )
};

export default Grid;
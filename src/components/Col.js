import React from 'react';
import '../styles/Col.css';

//the Col component represents an individual column inside the grid
const Col = (props) => {
    return (
        <div style={{ backgroundColor: props.cellColor }} className="individual-col" onClick={function () { props.setCellColor(props.indexr, props.indexc, props.color) }} onMouseDown={function () { props.setActive() }} onMouseOver={function () { props.activeColoring(props.indexr, props.indexc, props.color, props.activeDrawing) }} onMouseUp={function () { props.setInactive()}}>
        </div>

    );
}

export default Col;
import React from 'react';
import '../styles/Col.css';

//the Col component represents an individual column inside the grid
const Col = (props) => {
    return (
        <div
            style={{
                backgroundColor: props.cellColor
            }}
            className="individual-col"
            //changes color of cell on click
            onClick={function () {
                props.setCellColor(props.indexr, props.indexc, props.color)
            }}
            //Sets active drawing to true on mousedown
            onMouseDown={function () {
                props.setActive(); props.setCellColor(props.indexr, props.indexc, props.color)
            }}
            //If active drawing is true on MouseOver, colors cell
            onMouseOver={function () {
                props.activeColoring(props.indexr, props.indexc, props.color, props.activeDrawing)
            }}
        >

        </div>

    );
}

export default Col;
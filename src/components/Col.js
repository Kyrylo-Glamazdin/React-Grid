import React from 'react';
import '../styles/Col.css';

const Col = (props) => {
    console.log(props);
    return (
        <div style={{ backgroundColor: props.cellColor }} className="individual-col" onClick={function () {props.setCellColor(props.indexr, props.indexc, props.color)}}>
        </div>

    );
}

export default Col;
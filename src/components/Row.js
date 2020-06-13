import React, {Component} from 'react';
import Col from './Col.js';

class Row extends Component{
    render(){
        return(
            <div className = "individual-row">
            {this.props.cols.map((cellColor, index) => <Col 
            cellColor={cellColor} 
            key={ index } 
            /> )}
            </div>
        );
    }
}

export default Row;
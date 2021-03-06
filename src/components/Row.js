import React, {Component} from 'react';
import Col from './Col.js';

//the Row component represents individual row inside the grid
class Row extends Component{
    render() {
        return(
            <div className = "individual-row">
            {this.props.cols.map((cellColor, index) => <Col
                cellColor={cellColor}
                key={index}
                color={this.props.color}
                indexc={index}
                indexr={this.props.indexr}
                setCellColor={this.props.setCellColor}
                setActive={this.props.setActive}
                activeColoring={this.props.activeColoring}
                activeDrawing={this.props.activeDrawing}
                setInactive={this.props.setInactive}
            /> )}
            </div>
        );
    }
}

export default Row;
import React, {Component} from 'react';
import Col from './Col.js';

class Row extends Component{
    render(){
        return(
            this.props.cols.map((_, index) => <Col key={ index } /> )
        );
    }
}

export default Row;
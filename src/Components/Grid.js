import React, {Component} from 'react';
import Row from './Row.js';

class Grid extends Component{
    render(){
        return (
            this.props.rows.map(row => (<Row cols={row}/>))
        );
    }
}

export default Grid;
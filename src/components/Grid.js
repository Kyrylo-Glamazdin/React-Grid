import React, {Component} from 'react';
import Row from './Row.js';

class Grid extends Component{
    render(){
        const { rows } = this.props;
        return (
            <main>
                <h1>columns console.log correctly but just doesnt display correctly rn (i think this is what you were aiming for if you look at the data structure after clicking add col button) </h1>
                {
                    this.props.rows.map((row, index) => (<Row key={ index } cols={row}/>))
                }
            </main>
        );
    }
}

export default Grid;
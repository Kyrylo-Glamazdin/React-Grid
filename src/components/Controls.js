import React from 'react';
import '../styles/Controls.css';

//the controls section with all of the buttons to control the grid
const Controls = ({ addRow, addCol, removeRow, removeCol, fillUncolored, fillAll, clear, chooseColor }) => {
    const colors = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
    ]
    return (
        <div className='controls'>
            <button onClick={ addRow }>Add Row</button>
            <button onClick={ addCol }>Add Col</button>
            <button onClick={ removeRow }>Remove Row</button>
            <button onClick={ removeCol }>Remove Col</button>
            <button onClick={ fillUncolored }>Fill All Uncolored</button>
            <button onClick={ fillAll }>Fill All</button>
            <button onClick={ clear }>Clear</button>
            <select onChange={ chooseColor }>
                <option default hidden>Choose a color</option>
                {
                    colors.map(color => <option key={color}>{ color }</option> )
                }
            </select>
        </div>
    );
};

export default Controls
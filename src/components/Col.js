import React, {Component} from 'react';
import '../styles/Col.css';

class Col extends Component{
    render(){
        return(
            <div style={{backgroundColor: this.props.cellColor}} className="individual-col">
            </div>
        );
    }
}

export default Col;
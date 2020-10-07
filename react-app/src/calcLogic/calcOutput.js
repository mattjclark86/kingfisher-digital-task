import React from 'react';
import {Component} from 'react';

class calcOutput extends Component {
    render() {
        let {result} = this.props;
        return( 
            <div className="result">
                <p>{result}</p>
            </div>
        );
    }
}

export default calcOutput;
import React, {Component} from 'react';

class calcOutput extends Component {
    //Results screen and results logic
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
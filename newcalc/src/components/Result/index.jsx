import React from 'react';
import './style.css';


export default class Result extends React.Component {

    render() {

        return (
            <div>
                <div className='status'>{this.props.currentNumber}</div>
            </div>

        )

    }

}




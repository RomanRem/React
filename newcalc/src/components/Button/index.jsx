import React from 'react';
import './style.css';

export default class Button extends React.Component {

    render() {
        return (
            <div onClick={() => this.props.handleNumber(this.props.value)} className={'button'}>
                {this.props.value}
            </div>
        )

    }

}

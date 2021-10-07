import React from 'react';
import '../../../../../testcalc/src/Components/Button/style.css';

export default class Button extends React.Component {

    render() {
        return (
            <div onClick={() =>
                this.props.handleNumber(this.props.value)} className={'button'}>
                {this.props.value}
            </div>
        )

    }

}

import React from 'react';
import Button from "../Button";
import Result from '../Result';


export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: '',
        };

    }

    handleNumber = (value) => {
        this.setState({currentNumber: value})

    }

    render() {
        return (
            <div>
                <Result className={'status'} currentNumber={this.state.currentNumber}/>
                <div className={'row'}>
                    <Button handleNumber={this.handleNumber} value={0}/>
                    <Button handleNumber={this.handleNumber} value={1}/>
                    <Button handleNumber={this.handleNumber} value={2}/>
                    <Button handleNumber={this.handleNumber} value={3}/>
                </div>
                <div className={'row'}>
                    <Button handleNumber={this.handleNumber} value={4}/>
                    <Button handleNumber={this.handleNumber} value={5}/>
                    <Button handleNumber={this.handleNumber} value={6}/>
                    <Button handleNumber={this.handleNumber} value={7}/>
                </div>

                <div className={'row'}>
                    <Button handleNumber={this.handleNumber} value={8}/>
                    <Button handleNumber={this.handleNumber} value={9}/>
                    <Button handleNumber={this.handleNumber} value={'*'}/>
                    <Button handleNumber={this.handleNumber} value={'/'}/>
                </div>
                <div className={'row'}>
                    <Button handleNumber={this.handleNumber} value={'+'}/>
                    <Button handleNumber={this.handleNumber} value={'-'}/>
                    <Button handleNumber={this.handleNumber} value={'='}/>
                    <Button handleNumber={this.handleNumber} value={'C'}/>
                </div>

            </div>
        )

    }
}


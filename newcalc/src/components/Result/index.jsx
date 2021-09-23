import React from 'react';
import './style.css';


export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            currentNumber: this.props.value

        }
           }
        render(){

            return(
                    <div>
                    <div className="status"/>
                    </div>

            )

        }

}




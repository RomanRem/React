import React from 'react';
import macbook from "../assets/img/macbook.png";

function TopProduct (props){
    return(

        <div className="card">
            <div className="card-wrap">
                <div className="img">
                    <img src={macbook} alt="nb" className="card-pick "/>
                </div>
                <p className="name">Хит продаж &#128293;</p>
                <p className="price">{props.price} руб</p>
                <div className="bar">
                    <button className="button">Купить</button>
                    <div className="pick-star active"/>
                </div>
            </div>
        </div>
    )


}
export default TopProduct
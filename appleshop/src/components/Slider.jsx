import React from 'react';
import leftArrow from "../assets/img/Stroke-1.png";
import rightArrow from "../assets/img/StrokeR.png";

function Slider() {
    return (

        <section className="slider">
            <div className="slider-wrap">
                <div className="l-arrow">
                    <img src={leftArrow} alt="l-arrow" className="l-arr"/>
                </div>
                <div className="contet-text">
                    <p className="text">
                        подпишись на инстаграм: <b>
                        <a target="_blank" rel="noreferrer"
                           href="https://www.instagram.com/romanrem/">@RR_programmer</a></b>
                    </p>
                </div>
                <div className="r-arrow">
                    <img src={rightArrow} alt="r-arrow" className="r-arr"/>
                </div>
            </div>
            <div className="slider-page">
                <div className="page active"/>
                <div className="page"/>
                <div className="page"/>
            </div>
        </section>
    )

}

export default Slider
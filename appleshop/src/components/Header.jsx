import React from 'react';
import logo from "../assets/img/logo.svg";

function Header() {
    return (

        <header className="header">
            <div className="inner">
                <a href="##" className="logo-link">
                    <img src={logo} alt="logo" className="logo-pick"/>
                </a>
                <ul className="menubar">
                    <li>
                        <a href="##" className="home-link">
                            <div className="home active menubar-item"/>
                        </a>
                    </li>
                    <li>
                        <a href="##" className="favorite-link">
                            <div className="favorite menubar-item"/>
                        </a>
                    </li>
                    <li>
                        <a href="##" className="cart-link">
                            <div className="cart menubar-item"/>
                        </a>
                    </li>
                </ul>

            </div>

        </header>
    )

}

export default Header
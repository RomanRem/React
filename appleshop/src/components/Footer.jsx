import React from 'react';
import FooterLogo from '../assets/img/footerLogo.svg';

function Footer () {

    return (

        <footer className="footer">
            <div className="inner">
                <a href="##" className="logo-link">
                    <img src={FooterLogo} alt="logo" className="logo-pick"/>
                </a>
                <div className="footer-navbar">
                    <div className="navbar-links">
                        <a href="##" className="navbar-item footer-home">Home</a>
                        <a href="##" className="navbar-item footer-favorite">Favorite</a>
                        <a href="##" className="navbar-item footer-cart">Корзина</a>
                    </div>
                    <div className="footer-info">Copyright 2021©</div>
                </div>
                <a href="https://www.instagram.com/romanrem/" className="insta-link">
                    <div className="contacts"/>
                </a>
            </div>
        </footer>
    )

}
export default Footer
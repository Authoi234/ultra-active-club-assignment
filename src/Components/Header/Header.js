import React from 'react';
import logo from '../../images/LogoMakr-5bG8Al.png';
import './Header.css'

const Header = () => {
    return (
        <div className='position'>
            <h3 className='header'><img className='logo' src={logo} alt="" /> <strong>DAILY EXERCISE</strong></h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
                <li>Services</li>
            </ul>
        </div>
    );
};

export default Header;
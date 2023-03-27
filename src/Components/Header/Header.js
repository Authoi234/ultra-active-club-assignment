import React from 'react';
import logo from '../../images/LogoMakr-5bG8Al.png';
import './Header.css'

const Header = () => {
    return (
        <div className='position'>
            <h1 className='header'><img className='logo' src={logo} alt="" /> DAILY EXERCISE</h1>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../images/LogoMakr-5bG8Al.png';
import './Header.css'

const Header = () => {
    return (
        <div className='position'>
            <h2 className='header'><img className='logo' src={logo} alt="" /> <strong>DAILY EXERCISE</strong></h2>
            <ul>
                <li><a href="https://stellular-selkie-4e641c.netlify.app/">Home</a></li>
                <li><a href="https://stellular-selkie-4e641c.netlify.app/">About</a></li>
                <li><a href="https://stellular-selkie-4e641c.netlify.app/">Login</a></li>
                <li><a href="https://stellular-selkie-4e641c.netlify.app/">Services</a></li>
            </ul>
        </div>
    );
};

export default Header;
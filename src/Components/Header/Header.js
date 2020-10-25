import React from 'react';
import Banner from '../Banner/Banner';
import NavComponents from '../NavComponents/NavComponents';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavComponents></NavComponents>
            <Banner></Banner>
        </div>
    );
};

export default Header;
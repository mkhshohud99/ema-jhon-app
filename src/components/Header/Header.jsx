import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </div>
        </nav>
    );
};

export default Header;
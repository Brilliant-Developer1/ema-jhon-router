import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img height='80px' src={logo} alt="" />
            <nav>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orderReview">Order Review</NavLink>
            <NavLink to="/inventory">Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import './Nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
      <nav className='nav'>
        <h1>PRO-PHOTOGRAPHERS-CLUB</h1>
        <h4>Select your favorite one</h4>
      </nav>
    );
};

export default Nav;
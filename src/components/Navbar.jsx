import React from 'react';
import './navBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="nav">
            <h1>La cueva TCG</h1>
            <a href="">Magic The Gathering</a>
            <a href="">Pokemon</a>
            <a href="">One Piece</a>
            <a href="">Lairen</a>
            <a href="">Accesorios</a>
            <CartWidget/>
        </div>
    );
};

export default NavBar;
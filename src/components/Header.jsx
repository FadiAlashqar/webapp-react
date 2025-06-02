import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className="container-fluid">
                <NavLink to={"/"}>Hompage</NavLink>
            </div>
        </nav>
    )
}

export default Header
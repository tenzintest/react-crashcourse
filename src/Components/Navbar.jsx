import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li>
                <Link to="/city">
                    City
                </Link>
            </li>
            <li>
                <Link to="/country">
                    Country
                </Link>
            </li>
            <li>
                <Link to="/village">
                    Village
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
import React from 'react';
import './navbar.css';
import logo from '../../assets/new-logo.png';
import profile from '../../assets/profile.png';
import {Link, Route } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src = {logo} alt="logo" id = "left_logo" className = 'logo'/>
            <div className="desktopMenu">

                <Link className = "desktopMenuListItem" to ="/" style = {{textDecoration: 'none'}}>Home</Link>
                <Link className = "desktopMenuListItem" to ="/ExamplePage" style = {{textDecoration: 'none'}}>Examples</Link>
                <Link className = "desktopMenuListItem" to ="/AboutUs"  style = {{textDecoration: 'none'}}>About Us</Link>
            </div>

            <img src = {profile} alt="logo" id = "right_logo" className = 'logo'/>
           
        </nav>
    )
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/glownbloom.png';
import cart from '../assets/Cart.png';
import '../components/Navbar.css';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  vt-navbar">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse vt-navbar-inner" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 vt-left">
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" aria-current="page" to='/glowboom'>Home</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/about-us'>About Us</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/shop'>Shop</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/skin-care'>skin care</NavLink>
            </li>
            <li className="nav-item vt-items vt-space">
              <NavLink className="vt-logo" href="/glowboom">
                <img src={logo} alt="logo"></img>
              </NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/hair-care'>hair care</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/blogs'>blogs</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/offers'>offers</NavLink>
            </li>
            <li className="nav-item vt-items">
              <NavLink className="nav-link vt-links" to='/glowboom/contact-us'>contact us</NavLink>
            </li>
          </ul>
        </div> 
        <div className='cart-updation'>
          <img src={cart} alt='cart'></img>
          <span className="pls-header-icon-text">0</span>
        </div>
      </div>
    </nav>
    </div>
  )
}

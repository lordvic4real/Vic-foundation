import React, { useState } from 'react'
import { HeaderBar } from './headerStyles'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, } from "react-icons/fi"
import {  FaBars, FaTimes } from 'react-icons/fa'
import { DonateBtn } from '../../utils/button'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 950) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 950) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <HeaderBar>
          <div className='header-contact'>
            <div className='contact-details'>
          <p> <label>Phone:</label><span>07060936070</span></p>
          <p> <label>Email:</label><span>Support@milkavic.com</span></p>
          <p className='icon-wrap'>
            <FiFacebook style={{color: " #4368b2"}} />
            <FiTwitter  style={{color: " #1aa1f2"}}/>
            <FiInstagram style={{color: " #fa0a43"}} />
            <FiYoutube style={{color: " #fb0000"}}/>
          </p>
        </div>
        <div className=''>
            <DonateBtn>donate</DonateBtn>
        </div>
      </div>
      <div className='header-menu'>
        <span className='logo' onClick={closeMobileMenu}>Milkavic</span>
        <nav>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? <FaTimes/> : <FaBars/>} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
           <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About us</Link>
          </li>
           <li className='nav-item'>
            <Link to="/programs" className='nav-links' onClick={closeMobileMenu}>Programmes</Link>
          </li>
           <li className='nav-item'>
            <Link to="/events" className='nav-links' onClick={closeMobileMenu}>Events</Link>
          </li>
           <li className='nav-item'>
            <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>Blog</Link>
          </li>
           <li className='nav-item'>
            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
          </li>
          {/* <li className='nav-item'>
            <DonateBtn>donate</DonateBtn>
          </li> */}
          </ul>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header

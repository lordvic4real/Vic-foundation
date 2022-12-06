import React from 'react'
import { HeaderBar } from './headerStyles'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi"
import { DonateBtn } from '../../utils/button'
import { Link } from 'react-router-dom'

const Header = () => {
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
            <FiYoutube style={{color: " #fb0000;"}}/>
          </p>
        </div>
        <div>
            <DonateBtn>donate</DonateBtn>
        </div>
      </div>
      <div className='header-menu'>
        <span className='logo'>Milkavic</span>
        <nav>
          <span>
            <Link to="/">Home</Link>
          </span>
           <span>
            <Link to="/about">About us</Link>
          </span>
           <span>
            <Link to="/programs">Programmes</Link>
          </span>
           <span>
            <Link to="/events">Events</Link>
          </span>
           <span>
            <Link to="/blog">Blog</Link>
          </span>
           <span>
            <Link to="/contact">Contact</Link>
          </span>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header

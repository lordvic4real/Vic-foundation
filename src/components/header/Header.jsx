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
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
            <FiYoutube/>
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
            <Link to="/">About us</Link>
          </span>
           <span>
            <Link to="/">Programmes</Link>
          </span>
           <span>
            <Link to="/">Events</Link>
          </span>
           <span>
            <Link to="/">Blog</Link>
          </span>
           <span>
            <Link to="/">Contact</Link>
          </span>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header

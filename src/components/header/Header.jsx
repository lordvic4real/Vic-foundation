import React, { useState } from 'react'
import { HeaderBar } from './headerStyles'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi"
import { DonateBtn } from '../../utils/button'


import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./../styles/NavBar.style";
import LogoImg from "./../../assets/images/logonew.png";
import { Link } from 'react-router-dom';

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  

  

  return (
    <HeaderBar>
          <div className='header-contact'>
            <div className='contact-details'>
          <p> <label>Phone:</label><span>+23408167848499</span></p>
          <p> <label>Email:</label><a href='mailto:voicelessno1@gmail.com' target={"_blank"}rel='noopenner noreferrer'>voicelessno1@gmail.com</a></p>
          <p className='icon-wrap'>
          <a href=" https://www.facebook.com/Vioceless1 " target="_blank" rel='noopenner noreferrer'>
          <FiFacebook style={{color: " #4368b2"}} />
          </a>
           <a href="https://www.twitter.com/ztemmy" target="_blank" rel='noopenner noreferrer'>
             <FiTwitter  style={{color: " #1aa1f2"}}/></a>
           <a href="https://www.instagram.com/temmyben">
           <FiInstagram style={{color: " #fa0a43"}}  target="_blank" rel='noopenner noreferrer'/>
           </a>
           <a href={"https://www.youtube.com/ztemmy"} target="_blank" rel='noopenner noreferrer'>
           <FiYoutube style={{color: " #fb0000"}}/>
           </a>
           <a href={"http://linkedin.com/in/zubair-nasiru-temidire"}  target="_blank" rel='noopenner noreferrer'>
           <FiLinkedin style={{color: " #1aa1f2"}}/>
           </a>
          </p>
        </div>
        <div className=''>
            <DonateBtn>donate</DonateBtn>
        </div>
      </div>
      <NavbarContainer>
        <LeftContainer>
          <Link to={"/"}>
          <Logo src={LogoImg}></Logo>
          </Link>
        </LeftContainer>
        <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
        <RightContainer>
          <NavbarLinkContainer>
          <NavbarLink to="/"> Home</NavbarLink>
          <NavbarLink to="/about">About us</NavbarLink>
          <NavbarLink to="/programs">Program</NavbarLink>
          <NavbarLink to="/gallery">Gallery</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer> 
        {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About us</NavbarLinkExtended>
          <NavbarLinkExtended to="/programs">Programs</NavbarLinkExtended>
          <NavbarLinkExtended to="/gallery">Gallery</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact" >Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
      </NavbarContainer>
    </HeaderBar>
  )
}

export default Header

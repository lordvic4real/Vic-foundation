import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DonateBtn } from '../../utils/button'
import { Container } from './styles'
import {BsFillPinMapFill, BsTelephone} from "react-icons/bs"
import {AiOutlineClockCircle, AiOutlineMail} from 'react-icons/ai'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin, } from "react-icons/fi"



const FooterBtn = styled(DonateBtn)`
   margin: 13px 0;
   :hover{
    color: white;
   }

`

const Footer = () => {
  return (
    <Container>
      <div className="footer-wrapper">
        <div>
          <h3 className="title">Our Mission</h3>
          <p className='m-desc'>
          We believe taking responsibilities is inevitable therefore VOV 
          Foundation is taking reponsiblity to 
          add values to humans for greater tomorrow. Indeed together we can speak.
          </p>
          <FooterBtn>become a volunteer</FooterBtn>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/volunteer"}>Volunteer</Link></li>
            <li><Link>Causes</Link></li>
            <li><Link to={"/event"}>Events</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li> 
          </ul>
        </div>
        <div>
          <h3>Gallery</h3>
        </div>
        <div className='m-rap'>
          <h3>Contact Us</h3>
          <p className='d-flex'>
            <span>
            <BsFillPinMapFill/>
            </span>
            <span>
            Opposite Small Market, Along Specialist Quarter, New-Kutunku, Gwagwalada, Abuja.
            </span>
          </p>
          <p className='d-flex'>
            <span>
              <BsTelephone/>
            </span>
            <span>+2348167848499, +2347012227405</span>
          </p>
          <p className='d-flex'>
            <AiOutlineMail/>
            <span>
            <a href='mailto:voicelessno1@gmail.com' target={"_blank"}rel='noopenner noreferrer'>voicelessno1@gmail.com</a>
            </span>
          </p>
          <p className='d-flex'>
            <span><AiOutlineClockCircle/></span>
            <span>
            Monday — Friday 8:00am - 5:00pm
            </span>
          </p>
          <p className='icon-wrap d-none'>
          <a href={" https://www.facebook.com/Vioceless1 "} target="_blank" rel='noopenner noreferrer'>
          <FiFacebook style={{color: " #4368b2"}} />
          </a>
           <a href={"https://www.twitter.com/ztemmy"} target="_blank" rel='noopenner noreferrer'>
             <FiTwitter  style={{color: " #1aa1f2"}}/></a>
           <a href={"https://www.instagram.com/temmyben"}>
           <FiInstagram style={{color: " #fa0a43"}}  target="_blank" rel='noopenner noreferrer' />
           </a>
           <a href={"https://www.youtube.com/ztemmy"} target="_blank" rel='noopenner noreferrer'>
           <FiYoutube style={{color: " #fb0000"}}/>
           </a>
           <a href={"http://linkedin.com/in/zubair-nasiru-temidire"}  target="_blank" rel='noopenner noreferrer'>
           <FiLinkedin style={{color: " #1aa1f2"}}/>
           </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
         <p>&copy; copyright 2022 VOV foundation</p>
      </div>
    </Container>
  )
}

export default Footer

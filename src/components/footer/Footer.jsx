import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DonateBtn } from '../../utils/button'
import { Container } from './styles'
import {BsFillPinMapFill, BsTelephone} from "react-icons/bs"
import {AiOutlineClockCircle, AiOutlineMail} from 'react-icons/ai'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, } from "react-icons/fi"


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
          <p>
            Designed to respond in a great variety of situations, the SOS Socia
            l Centres help in a number of ways: from communicating vital
            knowledge and teaching skills, to counselling, supervision and even
            specific.
          </p>
          <FooterBtn>become a volunteer</FooterBtn>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Volunteer</Link></li>
            <li><Link>Causes</Link></li>
            <li><Link>Events</Link></li>
            <li><Link>Contact</Link></li> 
          </ul>
        </div>
        <div>
          <h3>Gallery</h3>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p className='d-flex'>
            <span>
            <BsFillPinMapFill/>
            </span>
            <span>
            203 Fake St. Mountain View, San Francisco, California, USA
            </span>
          </p>
          <p className='d-flex'>
            <span>
              <BsTelephone/>
            </span>
            <span>+2347060936070</span>
          </p>
          <p className='d-flex'>
            <AiOutlineMail/>
            <span>
              support@vicsoftfoundations.org
            </span>
          </p>
          <p className='d-flex'>
            <span><AiOutlineClockCircle/></span>
            <span>
            Monday — Friday 8:00am - 5:00pm
            </span>
          </p>
          <p className='icon-wrap d-none'>
            <FiFacebook style={{color: " #4368b2"}} />
            <FiTwitter  style={{color: " #1aa1f2"}}/>
            <FiInstagram style={{color: " #fa0a43"}} />
            <FiYoutube style={{color: " #fb0000"}}/>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
         <p>&copy; copyright 2022 vic foundation</p>
      </div>
    </Container>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

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
        </div>
      </div>
      <div className="footer-bottom">
         <p>&copy; copyright 2022 vic foundation</p>
      </div>
    </Container>
  )
}

export default Footer

import React from 'react'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import NewLetter from '../components/newletter/NewLetter'
import Services from '../components/services/Services'
import { CausesBtn } from '../utils/button'
import { Container } from './homesStyles'

const Home = () => {
  return (
    <>
      <Banner>
        <Container>
          <h1>
            GIVE A HAND <br /> TO MAKE THE  WORLD BETTER
          </h1>
          <p>
            That don't lights. Blessed land spirit creature divide our made two
            itself upon you'll dominion <br />
            waters man second good you they're divided upon winged were
            replenish night
          </p>
          <CausesBtn>Our Causes</CausesBtn>
        </Container>
      </Banner>
      <About />
      <div>
        <Services />
        <NewLetter/>
      </div>
    </>
  )
}

export default Home

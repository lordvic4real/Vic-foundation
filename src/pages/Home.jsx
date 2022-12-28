import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import NewLetter from '../components/newletter/NewLetter'
import Services from '../components/services/Services'
import { CausesBtn } from '../utils/button'
import { Container } from './homesStyles'

 const Btn = styled(CausesBtn) `
    :hover{
      color: white !important;
    }

 `

const Home = () => {
  return (
    <>
      <Banner>
        <Container>
          <h1>
            GIVE A VOICE <br /> TO MAKE THE  WORLD BETTER
          </h1>
          <p>
            Give a voice to the voiceless in order to build the voice for human capital development, <br/> because together we can speak.
          </p>
          <Link to={"/about"}>
          <Btn>Learn More</Btn>
          </Link>
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

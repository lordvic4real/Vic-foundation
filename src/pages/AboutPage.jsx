import React from 'react'
import styled from 'styled-components'
import Directors from '../components/directors/Directors'
import Banner from '../components/banner/Banner'
import DirectorBio from '../components/bio/DirectorBio'

const AboutPage = () => {
  return (
    <Container>
      <Banner>
        <div className='banner'>
           <h1>about us</h1>
        </div>
      </Banner>
      <DirectorBio/>
     <h1 className='title'>executive directors</h1>
    <Directors/>
    </Container>
  )
}

export default AboutPage


const Container= styled.div`
   .title{
    text-align: center;
    text-transform: capitalize;
    
   }
   .banner {
    height: 400px;
    display: grid;
    place-items: center;
    background:#074885;
    margin-bottom: 40px;
    color: white;
    text-transform: capitalize;
    font-size: 35px;
   }



`
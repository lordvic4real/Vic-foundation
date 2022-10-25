import React from 'react'
import { Container } from './bannerStyles'


const Banner = (props) => {
  return (
      <>
          <Container>{props.children }</Container>
      </>
  )
}

export default Banner
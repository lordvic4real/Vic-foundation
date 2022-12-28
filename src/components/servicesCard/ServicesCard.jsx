import React from 'react'
import { Container } from './serviceCardstyle'

const ServicesCard = ({image, title, desc}) => {
  return (
      <Container>
          <div className='card'>
              <img src={image} alt="" />
              <h3 className='title2'>{title}</h3>
              <p>{desc }</p>
          </div>
    </Container>
  )
}

export default ServicesCard
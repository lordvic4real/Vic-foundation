import React from 'react'
import { Container } from './serviceCardstyle'

const ServicesCard = ({icon, title, desc}) => {
  return (
      <Container>
          <div className='card'>
             <span>{icon}</span>
              <h3 className='title2'>{title}</h3>
              <p>{desc }</p>
          </div>
    </Container>
  )
} 

export default ServicesCard
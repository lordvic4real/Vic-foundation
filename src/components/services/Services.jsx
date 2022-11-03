import React from 'react'
import ServicesCard from '../servicesCard/ServicesCard'
import { Container } from './serviceStyle'
import donate from './../../assets/images/donate.webp'
import inspire from './../../assets/images/inspire.webp'
import volun from './../../assets/images/volun.webp'

const Services = () => {
  const services = [
    {
      title: 'Education for every child',
      pix: donate,
      desc:
        "giving every child relevant skills to meet up with the 21th century challenges",
    },
    {
      title: 'Give Inspiration',
      pix: inspire,
      desc:
        "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose",
    },
    {
      title: 'Feeding the hungry',
      pix: volun,
      desc:
        "It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose",
    },
  ]
  return (
    <Container>
      <h1 className="title">our causes</h1>
      <div className="card-wrapper">
        {services &&
          services.map(({ title, desc, pix }) => (
            <ServicesCard title={title} desc={desc} image={pix} />
          ))}
      </div>
    </Container>
  )
}

export default Services

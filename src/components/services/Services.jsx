import React from 'react'
import ServicesCard from '../servicesCard/ServicesCard'
import { Container } from './serviceStyle'
import donate from './../../assets/images/donate.webp'
import inspire from './../../assets/images/inspire.webp'
import volun from './../../assets/images/volun.webp'

const Services = () => {
  const services = [
    {
      title: 'Education',
      pix: donate,
      desc:
        "Giving every child relevant skills to meet up with the 21th century challenges",
    },
    {
      title: 'Health',
      pix: inspire,
      desc:
        " To draw awareness to the under development of health care in our dear Nigeria and propose viable solutions.",
    },
    {
      title: 'Poverty Eradication ',
      pix: volun,
      desc:
        " To train the masses to be self reliance in order to alleviate poverty that contributes to the menace of social vices  ",
    },
    {
      title: 'Human Capital Development',
      pix: volun,
      desc:
        "To provide empowerment on skills acquisition.",
    },
    {
      title: 'Peace Ambassadors and Propagator for Good Governance',
      pix: volun,
      desc:
        "To serve as an advocate of good governance.",
    },
    {
      title: 'Equality',
      pix: volun,
      desc:
        "Equality and justice.",
    },
  ]
  return (
    <Container>
      <h1 className="title">our Focus</h1>
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

import React from 'react'
import { BoardMembers } from '../../utils/card'
import dhealth from "./../../assets/images/ceohealth.jpg"
import d2 from "./../../assets/images/pix.jpg"
import d3 from "./../../assets/images/img3.jpg"
import lawyer from "./../../assets/images/lawyer.jpg"
import ceo from "./../../assets/images/founder.jpg"
import { Container } from './styles'

const data = [
  {
    id: 1,
    name: "Amb. Zubair Nasiru Temidire (Omoba)",
    tittle: "Chairman BoT, Founder/CEO",
    desc: "A Teacher, Economist, General Consultant, Public Speaker & Peace Ambassador",
    image: ceo
  },
  {
    id: 2,
    name: "Dr. Kareem Olanrewaju",
    tittle: "Member BoT And Director of Education",
    desc: "Lecturer, Public Speaker & Educational Resource Person",
    image: d3,

  },
  {
    id: 3,
    name: "Bar. Blessing Tomilola Agboola-Ojo",
    tittle: "Director of Legal",
    desc: "Solicitor, Advocate, Corperate Consultants",
    image: lawyer
  },
  {
    id: 4,
    name: "Miss. Abubakar Ameenat Eniola",
    tittle: "Director of Information And Comunication",
    desc: "Computer Scientist,An Entreprenuer & General Consultant",
    image: d2
  },
  {
    id: 5,
    name: " Mrs. Lawal Kauthar Opeyemi",
    tittle: "Director of Health",
    desc: " A Nurse, Health Coach & Entreprenuer",
    image: dhealth
  },
]

const Directors = () => {
  return (
    <Container>
       {
        data && data.map(({name,desc,tittle,image,id}) =>
         <BoardMembers  key={id} title={tittle} name={name} desc={desc} image={image}/>)
       }
    </Container>
  )
}

export default Directors
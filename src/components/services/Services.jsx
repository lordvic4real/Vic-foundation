import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import { Container } from "./serviceStyle";
import { HiAcademicCap } from "react-icons/hi";
import { GiHealthNormal, GiHumanPyramid, GiPeaceDove } from "react-icons/gi";
import { FaEnvira } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";

const Services = () => {
  const services = [
    {
      title: "Education",
      icon: <HiAcademicCap />,
      desc: "Giving every child relevant skills to meet up with the 21th century challenges",
    },
    {
      title: "Health",
      icon: <GiHealthNormal />,
      desc: " To draw awareness to the under development of health care in Africa and propose viable solutions.",
    },
    {
      title: "Poverty Eradication ",
      icon: <FaEnvira />,
      desc: " To train the masses to be self reliance in order to alleviate poverty that contributes to the menace of social vices  ",
    },
    {
      title: "Human Capital Development",
      icon: <GiHumanPyramid />,
      desc: "To provide empowerment and skills acquisition.",
    },
    {
      title: "Peace Ambassadors and Propagator for Good Governance",
      icon: <GiPeaceDove />,
      desc: "To serve as an advocate peace and good governance.",
    },
    {
      title: "Equality",
      icon: <VscLaw />,
      desc: "Equality and justice.",
    },
  ];
  return (
    <Container>
      <h1 className="title">our Focus</h1>
      <div className="card-wrapper">
        {services &&
          services.map(({ title, desc, icon }) => (
            <ServicesCard title={title} desc={desc} icon={icon} />
          ))}
      </div>
    </Container>
  );
};

export default Services;

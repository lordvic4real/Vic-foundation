import React from "react";
import { DonateBtn } from "../../utils/button";
import { Container } from "./style";

const About = () => {
  return (
    <Container>
      <div className="about-container">
        <div className="img-bg"></div>
        <div className="desc">
          <h1 className="title">who we are</h1>
          <p>
            We are a Non Profit Organization that believes, taking responsibilities is inevitable therefore VOV
            Charity Foundation is taking reponsiblity to make sustainable impact that add values to human
            for greater tomorrow and Indeed together we can speak.
          </p>
          <DonateBtn>learn more</DonateBtn>
        </div>
      </div>
    </Container>
  );
};

export default About;

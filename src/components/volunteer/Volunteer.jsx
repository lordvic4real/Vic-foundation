import React from "react";
import styled from "styled-components";
import VolunteerForm from "../../utils/forms/volunteerForm";
import Banner from "../banner/Banner";
import bannerimg from "../../assets/images/volunteer.jpg";
const Container = styled.div`
  .bannerbg {
    height: calc(100vh - 200px);
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${bannerimg}) center/cover no-repeat;
    display: grid;
    place-items: center;
  }

  .inner-content {
    width: 90%;
    max-width: 1100px;
    padding:40px;
    min-height: 200px;
    color: #fff;
    background: #1e6fe999;
    /* border-radius:5px; */
  }

  .inner-content h1 {
    margin-bottom: 20px;
    line-height: 1;
    font-size: 3rem;
    color: #ffffff;
    text-transform: capitalize;
    letter-spacing: 3px;
  }

  .inner-content h3 {
    color: #ffffff;
  }
`;

const Volunteer = () => {
  return (
    <Container>
      <Banner>
        <div className="bannerbg">
          <div className="inner-content">
            <h1>become a volunteer.</h1>
            <h3>More people, more impact!</h3>
          </div>
        </div>
      </Banner>
      <VolunteerForm />
    </Container>
  );
};

export default Volunteer;

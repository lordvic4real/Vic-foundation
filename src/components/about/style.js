import styled from 'styled-components'
import bg from './../../assets/images/2.jpg'
export const Container = styled.div`
  .about-container {
    padding: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .img-bg {
    background: url(${bg});
    height: 450px;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  .desc {
    padding: 80px 50px;
    background: #ffffff;
    margin-top: 70px;
    margin-left: -40px;
    z-index: 2;
    box-shadow: 0px 5px 40px rgb(153 153 153 / 20%);
  }
  .title {
    font-weight: bold;
    color: black;
    text-transform: capitalize;
  }
`

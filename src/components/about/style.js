import styled from 'styled-components'
import bg from './../../assets/gallery-img/7.jpg'
export const Container = styled.div`
  .about-container {
    padding: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
    @media(max-width: 760px){
      grid-template-columns: 1fr;
      padding: 20px;
      
    }
  }
  .img-bg {
    background:linear-gradient(rgba(222,33,77,0.5), rgba(44,88,123,0.4)),url(${bg});
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
    @media(max-width: 760px){
      margin-left: 0px;
      padding: 8%;
      font-size: large;
    }
  }
  .title {
    font-weight: bold;
    color: black;
    text-transform: capitalize;
  }
  .desc p{
    line-height: 35px;
  }
  
`

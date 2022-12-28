import styled from 'styled-components'

export const Container = styled.div`
  min-height: 400px;
  box-sizing: border-box;

  .footer-wrapper {
    background: #091b27;
    line-height: 25px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: #f2f2f290;
    padding: 100px 120px;
    display: grid;
    grid-template-columns: 2.2fr 1.3fr 1.933fr 2.8fr;
    gap: 25px;
    flex-wrap: wrap;
    @media (max-width:768px) {
      grid-template-columns: 1fr;
      padding: 80px 5%;

    }
    @media (width:885px) {
      /* grid-template-columns: 1fr; */
      padding: 80px 5%;
    }
  }
  
  .footer-bottom {
    background: #071721;
    padding: 20px;
    text-align: center;
  }
  .footer-wrapper h3 {
    font-size: 18px;
    font-weight: 600;
    color: white;
    padding-bottom: 20px;
  }
  .footer-wrapper .title {
    font-size: 36px;
    font-weight: 600;
    color: white;
  }
  /* .footer-wrapper ul {
    padding-bottom: 15px;
  } */

  .footer-wrapper ul li {
    list-style: none;
    line-height: 30px;
  }
  .footer-wrapper ul li a {
    text-decoration: none;
    color: #f2f2f2;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    :hover {
      color: #fff;
      transition: all 0.2s ease-in-out 0.2s;
    }
  }
  .d-flex{
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 1em;
    @media (max-width:760px) {
      font-size: 120%;
      margin: 30px 0;
      gap: 15px;
    }
  }
  .d-none{
    display: none !important;
    @media(max-width: 768px){
      display: block !important;
      display: flex !important;
       gap: 40px !important;
       justify-content: center;
       margin-top: 50px !important
    }
  }
  
  .m-desc{
    padding-right: 5%;
  }
  .m-rap{
    padding: 0%;
  }
 
`

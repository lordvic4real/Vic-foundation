import styled from 'styled-components'

export const HeaderBar = styled.header`
  min-height: 100px;
  background: white;
  font-family: 'Poppins', sans-serif;
  color:  #04aaf8;

  .header-contact {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    align-items: center;
    min-height: 70px;
    flex-wrap: wrap;
    border-bottom: 1px solid #00000010;
    @media(max-width: 760px){
      height: auto;
      padding-bottom: 35px;
     
    }
   
  }
  .contact-details {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    @media (max-width: 760px){
      gap: 10px;
    }
  }
  .icon-wrap {
    display: flex;
    gap: 20px;
  }
  .header-contact p label {
    padding-right: 5px;
    font-size: 16px;
    font-weight: 600;
   color: #04aaf8;
  }
  .header-contact p label span {
    font-family: 12px;
    font-weight: 300;
    @media (max-width:760px){
      font-size: 200% !important;
    }
  }
  
  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    height: 80px;
    background: white;
    /* box-shadow: 2px 2px 3px #bebebe, -5px -5px 4px #ffffff; */
  }

  .header-menu nav {
    display: flex;
    gap: 30px;
  }
  .header-menu a {
    text-decoration: none;
    font-size: 18px;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color:  #bf1124;
  }
  /* .logo {
    font-size: 38px;
    color:  #bf1124;
    font-weight: 700;
  } */

   
`

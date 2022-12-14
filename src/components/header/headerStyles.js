import styled from 'styled-components'

export const HeaderBar = styled.header`
  min-height: 100px;
  background: white;
  font-family: 'Poppins', sans-serif;
  color:  #bf1124;

  .header-contact {
    display: flex;
    justify-content: space-between;
    padding: 0 3%;
    align-items: center;
    height: 70px;
    flex-wrap: wrap;
    border-bottom: 1px solid #00000010;
  }
  .contact-details {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .icon-wrap {
    display: flex;
    gap: 20px;
  }
  .header-contact p label {
    padding-right: 5px;
    font-size: 16px;
    font-weight: 600;
   color:  #bf1124;
  }
  .header-contact p label span {
    font-family: 12px;
    font-weight: 300;
  }
  /* .icon-wrap {
    
  } */
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
  .logo {
    font-size: 28px;
    color:  #bf1124;
    font-weight: 700;
  }

  .menu-icons{
    display: none;
  }

.fa-bars{
  color: #bf1124;
}

.nav-menu{
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.button{
  display: none;
}

  @media screen and (max-width: 950px) {
    .nav-menu{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5 ease;
    }

    .icon-wrap{
      display: none;
    }

    .header-menu a{
      color: white;
    }

    .nav-menu.active{
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0,5 ease;
      z-index: 1;
    }

    .nav-links{
      text-align: center;
      padding: 2rem;
      color: white;
      width: 100%;
      display: table;
    }

    .nav-links:hover{
      background-color: #bf1124;
      border-radius: 0;
    }

    .logo{
      position: absolute;
      top: 3.5;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon{
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.5rem;
      cursor: pointer;
    }

    .menu-icons{
      display: block;
      background-color: none;
    }

    .fa-times{
      color: black;
      font-size: 2rem;

    }
    
    .nav-links-mobile{
      display: contents;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #bf1124;
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
    }

    .menu-icons{
      color: #bf1124;
    }

    .nav-links-mobile:hover{
      background: #fff;
      color: #ec8593;
      transition: 250ms;
    }
  }
`

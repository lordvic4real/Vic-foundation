import styled from 'styled-components'

export const HeaderBar = styled.header`
  min-height: 100px;
  background: white;
  font-family: 'Poppins', sans-serif;
  color: #4400ff;

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
    color: #4400ff;
  }
  .header-contact p label span {
    font-family: 12px;
    font-weight: 300;
  }
  .icon-wrap {
    color: #4400ff;
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
    font-weight: 500;
    color: #4400ff;
  }
  .logo {
    font-size: 28px;
    color: #4400ff;
    font-weight: 700;
  }
`

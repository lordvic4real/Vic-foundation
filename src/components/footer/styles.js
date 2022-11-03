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
    color: #777777;
    padding: 100px 120px;
    display: grid;
    grid-template-columns: 2.2fr 1.3fr 1.933fr 1.8fr;
    gap: 25px;
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
    color: #777777;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    :hover {
      color: #fff;
      transition: all 0.2s ease-in-out 0.2s;
    }
  }
`

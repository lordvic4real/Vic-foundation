import styled from 'styled-components'

export const DonateBtn = styled.button`
  background:#015495;
  text-transform: capitalize;
  padding: 27px 44px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0px;
  line-height: 1;
  letter-spacing: 1px;
  line-height: 0;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  :hover {
    display: inline-block;
    background: transparent;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    border: 1px solid #ec8593;
    transition: all 300ms linear 0s;
  }
`

export const CausesBtn = styled.button`
  background: #ec8593;
  text-transform: capitalize;
  padding: 27px 44px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0px;
  line-height: 1;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  :hover {
    display: inline-block;
    background: transparent;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    border: 1px solid #ec8593;
    transition: all 300ms linear 0s;
  }
    animation: topBottom 0.4s ease-in-out both 1.2s ;

`

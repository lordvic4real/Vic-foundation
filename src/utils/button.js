import styled from "styled-components";

export const DonateBtn = styled.button`
  background: #015495;
  text-transform: capitalize;
  padding: 14px 36px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.4s linear;
  overflow: hidden;
  border: 3px solid #015495;
  font-family: "Roboto", sans-serif;
  :hover {
    background: transparent;
    color: #015495;

    /* transition: all 300ms linear 0s; */
  }
`;

export const CausesBtn = styled.button`
  border: 3px solid #ec8593;
  background: #ec8593;
  text-transform: capitalize;
  padding: 27px 44px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  :hover {
    background: transparent;
    color: #000;
    transition: all 300ms linear 0s;
  }
  animation: topBottom 0.4s ease-in-out both 1.2s;
`;

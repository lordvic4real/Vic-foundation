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
  border: 3px solid #015495;
  background: #015495;
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

export const SubmitBtn = styled.button`
  
    padding: 10px 40px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
    color: #015495;
    font-weight: 600;
    :hover {
      background-color: rgba(255, 255, 255, 0.4);
      border-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      transition: all 0.1s ease;
    }
  
`;

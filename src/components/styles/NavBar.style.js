import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavbar ? "100vh" : "90px")}; */
  height: auto;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
   padding: 0px 5%;
   
`;

export const RightContainer = styled.div`
  /* flex: 30%; */
`;

export const LeftContainer = styled.div`
  /* flex: 70%; */
  
`;

// export const NavbarInnerContainer = styled.div`
//   width: 100%;
//   height: 80px;
//   display: flex;
// `;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 40px;
    
`;

export const NavbarLink = styled(Link)`
  color: #04aaf8;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)` 
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  max-width: 130px;
  object-fit: contain;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 60px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  position: absolute;
  right: 5%;
  font-size: 50px;
  cursor: pointer;
  margin-bottom:10px;
  @media (min-width: 760px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #015495;
  position: absolute;
  width: 70vw;
  height: 100vw;
  right: 0;
  top:338px;
  padding-top:20px;
  z-index:20000 !important;
  @media (min-width: 760px) {
    display: none;
  }
`;
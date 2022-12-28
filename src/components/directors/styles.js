import styled from "styled-components";


export const  Container = styled.div `
 
  display: grid;
  justify-content: space-between;
  gap: 10px;
  grid-template-columns: repeat(5,1fr);
  padding: 80px 5%;
 
@media (max-width: 760px){
  grid-template-columns: auto;
}
.card-body{
  @media(max-width:760px){
    text-align: center;
    font-size: larger;
  }
}
@media(max-width: 760px) {
  .img-con img {
  width: 220px;
  height: 220px;
  object-position: center;
 } 
}

`
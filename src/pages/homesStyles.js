import styled from 'styled-components'
import bannerbg from './../assets/images/2.jpg'

export const Container = styled.div`
  background: linear-gradient(#00000080, #00000090), url(${bannerbg});
  height: 650px;
  background-size: cover;
  object-fit: cover;
  object-position: center;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  text-align: center;
  gap: 40px;
   color: white;
  h1 {
    line-height: 55px;
    font-size: 45px;
    font-weight:800;
    animation: topBottom 1s ease-in-out both  ;
   
  }
  p {
    line-height: 25px;
    font-size: 18px;
    animation: topBottom 0.4s ease-in-out both 1s ;

  }
  


@keyframes topBottom {
  0%{
    opacity:0 ;
    transform: translateY(50px) ;
  }
  100%{
    opacity:1 ;
    transform: translateX(0) ;
  }
  
}
`

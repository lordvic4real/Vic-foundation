import styled from 'styled-components'
import bannerbg from './../assets/images/2.jpg'

export const Container = styled.div`
  background: linear-gradient(#4400ff70, #4400ff60), url(${bannerbg});
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
   
  }
  p {
    line-height: 25px;
    font-size: 18px;
   
  }
`

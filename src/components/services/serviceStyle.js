import styled from 'styled-components'

export const Container = styled.div`
  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    justify-content: center;
    padding: 20px 10%;
    gap:2px 30px ;
    @media(max-width: 760px){
      grid-template-columns: 1fr;
      padding:  5%;
    }
  }
  .title {
    text-align: center;
    color: black;
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
    padding: 20px;
  }
`

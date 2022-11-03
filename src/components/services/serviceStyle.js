import styled from 'styled-components'

export const Container = styled.div`
  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    justify-content: center;
    padding: 20px 120px;
    gap:30px ;
  }
  .title {
    text-align: center;
    color: black;
    font-size: 37px;
    font-weight: 600;
    text-transform: capitalize;
    padding: 30px;
  }
`

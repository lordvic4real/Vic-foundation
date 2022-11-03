import styled from 'styled-components'

export const Container = styled.div`
  .card {
    min-height: 300px;
    padding: 40px;
    border-radius: 5px;
    box-shadow: none;
    text-align: center;
    margin-bottom: 30px;
    transition: all 300ms linear 0s;
    background: #f9fafc;
    :hover {
      box-shadow: 0px 20px 30px rgb(153 153 153 / 20%);
    }
  }
  img {
    padding: 12px;
  }
`

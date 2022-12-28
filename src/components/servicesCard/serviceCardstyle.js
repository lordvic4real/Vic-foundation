import styled from 'styled-components'

export const Container = styled.div`
  .card {
    /* min-height: 180px; */
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    text-align: center;
    max-width: 100%;
    margin-bottom: 30px;
    transition: all 300ms linear 0s;
    background:  #04aaf8;
    color: #fff;
    :hover {
      box-shadow: 0px 20px 30px rgb(153 153 153 / 20%);
    }
  }
  img {
    padding: 5px;
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
  p{
    line-height: 20px;
  }
  .title2{
    font-size:16px;
    font-weight: 600;
    padding: 10px;
    line-height: 20px;
  }
`

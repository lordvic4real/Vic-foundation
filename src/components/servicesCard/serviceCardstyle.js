import styled from 'styled-components'

export const Container = styled.div`

  .card {
    /* min-height: 180px; */
    padding: 25px;
    border-radius: 5px;
    /* border: 1px solid gray; */
    text-align: center;
    margin-bottom: 30px;
    transition: all 300ms linear 0s;
    background: #fff;
    color: #000;
    box-shadow: 2px 9px 8px rgb(153 153 153 / 20%);
    min-height: 200px;
    
  }
  .card svg {
    padding: 5px;
    height: 80px;
    width: 80px;
    object-fit: contain;
  }
  p {
    line-height: 20px;
    font-size: 16px;
    font-family: muli;
  }
  .title2 {
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    line-height: 20px;
  }
`;

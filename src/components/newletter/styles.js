const { default: styled } = require('styled-components')

export const Container = styled.div`
  padding: 20px 120px;
  @media(max-width: 760px){
    padding: 5% 3%;
  }
  .input-container {
    background: #091b27;
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: capitalize;
    gap: 35px 0;
    flex-wrap: wrap;
    color: #fff;
    border-radius: 12px;
    @media (max-width:760px) {
       /* padding: 5%; */
       height: auto;
    }

  }
  input {
    min-width: 300px;
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid #ec8593;
    outline: none;
    font-size: 14px;
    padding: 12px 20px;
    ::placeholder {
      text-transform: capitalize;
    }
  }
  form {
    display: inline-grid;
    gap: 10px;
  }
 @media (max-width:760px){
  h1{
    font-size: 130%;
    line-height: 30px;
  }
  
 }
`

import styled from "styled-components";


export const Container = styled.div `
  .img-con img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 0px;
    padding: 10px;
    object-fit: cover;
    object-position: center;
}
.img-con{
  /* border: 2px solid white;
  box-shadow: 2px 3px 4px rgba(0,0,0,0.3); */
  text-align: center;

}
.card-body{
  padding: 0px;
}

.wrap{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}


`

export const BoardMembers = ( {name, title, desc, image}) =>{
    return(
       <Container>
         <div className="wrap">
            <div className="img-con"><img src={image} alt=""/></div>
            <div className="card-body">
              <h4>{name}</h4>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
         </div>

       </Container>
     )
}

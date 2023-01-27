import React from 'react'
import styled from 'styled-components';
import { galleryImg } from '../data/data';
import {AiOutlineClose, AiOutlineDoubleRight} from 'react-icons/ai'
import {DonateBtn} from "./../utils/button"

const Layout = styled.div`
  background: #f6f6f6;
  min-height: 500px;
  font-family: "Oswald", sans-serif;
  .gal-content {
    text-align: center;
    padding: 80px 0 50px 0;
  }
  p {
    padding-top: 12px;
  }
  .btn-wrap{
    text-align: center;
    padding: 60px;
  }
  h1 {
    font-size: 37px;
  }
  .gallery-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    /* column-width: 33%;
    column-count: 3; */
    @media (max-width: 991px) {
      /* column-count: 2; */
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      /* column-count: 1; */
      grid-template-columns: 1fr;
      width: 100%;
      /* column-width: 100%; */
    }
  }
  .gallery-wrap img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    cursor: pointer;
  }
  .pics {
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
  }
  .model {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.888);
    transition: opacity 0.4s ease, visibity 0.4s ease, transform 0.5s ease-out;
    visibility: hidden;
    /* opacity: 0; */
    transform: scale(0);
    overflow: hidden;
    z-index: 999999;
  }
  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .model img {
    /* width: auto; */
    max-width: 40%;
    height: auto;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    max-height: 80%;
    margin: 0 auto;
    object-fit: cover;
  }
  .model.open svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2.03rem;
    height: 2.03rem;
    background: rgba(0, 0, 0, 0.4);
    padding: 5px;
    color: #fff;
    cursor: pointer;
  }
  /* .gallery-wrap .pics:hover {
    filter: opacity(0.8);
  } */
  .gallery-wrap img:hover {
    filter: opacity(0.6);
  }
`;


const Gallery = () => {
    const [tempImg, setTempImg] = React.useState("");
    const [model, setModel] = React.useState(false);

    const getImg = (imgUrl) => {
        setTempImg(imgUrl);
        setModel(true);
      };
  return (
    <Layout>
              <div className={model ? "model open" : "model"}>
          <img src={tempImg} alt="gallery pix" />
          <AiOutlineClose
            onClick={() => {
              setModel(false);
            }}
          />
        </div>

        <div className="gallery-wrap">
        { galleryImg.map((pix) => (
                    <div
                      className="pix"
                      key={pix.id}
                      onClick={() => getImg(pix.imgUrl)}
                    >
                      <img src={pix.imgUrl} key={pix.id}  alt="pix"/>
                    </div>
               ))}
        </div>
        <div className='btn-wrap'>
          <a href=" https://www.facebook.com/Vioceless1/photos " target="_blank" rel='noopenner noreferrer'>
          <DonateBtn><span>see more</span><AiOutlineDoubleRight/></DonateBtn>
          </a>
        </div>
    </Layout>
  )
}

export default Gallery
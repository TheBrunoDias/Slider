import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from './arrow.png';

//Styles
const Div = styled.div`
text-align: center;
@media(max-width: 800px){
  .App{
    margin: 0;
    width: 100%;
  }
}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 50vw;
  height: 50vh;
  margin: auto;
  padding: 0;
  overflow-x: hidden;

  @media(max-width: 800px){
    margin: 0;
    width: 100%;
  }

  &:hover{
    button{
      opacity: 0.8;
    }
  }

`;

const Slider = styled.div`
  width: 100px;
  margin: 0;
  padding: 0;
  min-width: 100%;
  height: 50vh;
  transition: 1s cubic-bezier(0, 0, 0.2, 1);

  img{
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

const Left = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: none;
  
  border: none;
  outline: none;
  
  top: 50%;
  left: 0;
  cursor: pointer;

  transition: 0.5s;

  img{
    background-color: #ffffff;
    border: none;
    border-radius: 45px;

    width: 100%;
    height: 100%;
  }

  @media(max-width: 800px){
    opacity: 1;
  }
  
`;

const Right = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  background: none;
  border: none;
  outline: none;
 
  top: 50%;
  right: 0;
  cursor: pointer;
  
  transform: rotate(180deg);
  transition: 0.5s;

  img{
    background-color: #ffffff;
    border: none;
    border-radius: 45px;
    
    width: 100%;
    height: 100%;
  }

  @media(max-width: 800px){
    opacity: 1;
  }

`;

export default function Carousel() {

  //Slides Array
  var sliderArr = [
    <div style={{backgroundColor: 'blue', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>01</h1></div>,
    <div style={{backgroundColor: 'red', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>02</h1></div>,
    <div style={{backgroundColor: 'yellow', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>03</h1></div>,
    <div style={{backgroundColor: 'green', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>04</h1></div>,
    <div style={{backgroundColor: 'blue', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>05</h1></div>,
    <div style={{backgroundColor: 'red', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <h1>06</h1></div>
  ];

  //useState to translate de Array
  const [x, setX] = useState(0);

  //Function Go to the Left
  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  }

  //Function Go to the Right
  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  }

  return (
    <Div>

      <h1>Slider</h1>

      <Container>
        {
          sliderArr.map((item, index) => {
            return (
              <Slider key={index} style={{ transform: `translateX(${x}%)` }}>
                {item}
              </Slider>
            )
          })
        }

        <Left onClick={goLeft}><img src={arrow} alt="arrow" /></Left>

        <Right onClick={goRight}><img src={arrow} alt="arrow" /></Right>
      </Container>
    </Div>
  );
}



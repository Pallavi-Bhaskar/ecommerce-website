import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

import girl from "../images/images/images/image1.png";
import boy from "../images/images/images/product-1.jpg";
import boys from "../images/images/images/category-3.jpg";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #d2efec;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  width: 800px;
  height: 600px;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <ImageContainer>
            <Image src={girl} />
          </ImageContainer>
          <InfoContainer>
            <Title>TOP BRANDS</Title>

            <Desc>STYLE UP WITH US</Desc>
            <Link to="/productlist">
              <Button>SHOW NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src={boy} />
          </ImageContainer>
          <InfoContainer>
            <Title>REASON SALE</Title>
            <Desc>FLAT 60% OFF ON NEW ARRIVALS</Desc>
            <Link to="/productlist">
              <Button>SHOW NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src={boys} />
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>BEST OFFERS ON TOP BRANDS</Desc>
            <Link to="/productlist">
              <Button>SHOW NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

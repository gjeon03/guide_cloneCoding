import { useViewportScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Card from "../common/Card";
import { bounce } from "../common/styles/bounce";

const Area = styled.section`
  width: 100%;
  height: 1400px;
  margin-top: 255px;
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: 100px;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 200;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DescriptionArea = styled.div`
  position: relative;
`;

const DescriptionBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  position: fixed;
  ${(props) => `transform: translate3d(0, ${props.$scroll}px, 0)`}
`;

const DescriptionText = styled.span`
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 50px;
`;

const DescriptionLink = styled.a`
  width: 140px;
  height: 55px;
  border: 1px solid black;
  border-radius: 27.5px;
  background-color: white;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    animation: ${bounce} 1s infinite ease-in-out;
  }
`;

const CardArea = styled.div``;

export default function WhatIsThis() {
  const [scrollPos, setScrollPos] = useState(null);
  const handleScrollPos = () => {
    const scrollY = window.scrollY;
    if (scrollY > 950) {
      setScrollPos((scrollY - 950) * -1);
    } else if (scrollY > 0) {
      setScrollPos(0);
    }
  };
  useEffect(() => {
    handleScrollPos();
    window.addEventListener("scroll", handleScrollPos);
  }, []);
  return (
    <Area>
      <DescriptionArea>
        <DescriptionBox $scroll={scrollPos}>
          <Title>¿QUÉ ES ESTO?</Title>
          <DescriptionText>
            Si estás leyendo esto, es porque pronto te operarán —a ti o a
            alguien importante para ti— de una enfermedad cardíaca y pasarás a
            formar parte de ese gran número de personas que han sido
            intervenidas y que ahora disfrutan de una mejor calidad de vida.
            Toma esta guía como parte del tratamiento.
          </DescriptionText>
          <Link href="#">
            <DescriptionLink>
              <span>Saber más</span>
            </DescriptionLink>
          </Link>
        </DescriptionBox>
      </DescriptionArea>
      <CardArea>
        <Title>&darr;&emsp; ¿EN QUÉ MOMENTO TE ENCUENTRAS?</Title>
        <Card />
      </CardArea>
    </Area>
  );
}

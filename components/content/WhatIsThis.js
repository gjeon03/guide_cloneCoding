import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Card from "../common/Card";
import { bounce } from "../common/styles/bounce";

const Area = styled.section`
  width: 100%;
  height: auto;
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
  height: auto;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
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
  return (
    <Area>
      <DescriptionArea>
        <DescriptionBox>
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

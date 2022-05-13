import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

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
  padding-left: 50px;
`;

const DescriptionText = styled.span`
  font-size: 18px;
  font-weight: 300;
`;

const CardArea = styled.div``;

export default function WhatIsThis() {
  return (
    <Area>
      <DescriptionArea>
        <Title>¿QUÉ ES ESTO?</Title>
        <DescriptionText>
          Si estás leyendo esto, es porque pronto te operarán —a ti o a alguien
          importante para ti— de una enfermedad cardíaca y pasarás a formar
          parte de ese gran número de personas que han sido intervenidas y que
          ahora disfrutan de una mejor calidad de vida. Toma esta guía como
          parte del tratamiento.
        </DescriptionText>
      </DescriptionArea>
      <CardArea>
        <Title>&darr;&emsp; ¿EN QUÉ MOMENTO TE ENCUENTRAS?</Title>
      </CardArea>
    </Area>
  );
}

import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import LogoBox from "../common/LogoBox";

const Area = styled.section`
  width: 100%;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 200px 1fr;
  background-color: white;
`;

const LeftOnscreen = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  font-size: 14px;
  font-weight: 300;
`;

const RightOnscreen = styled.div`
  width: 100%;
  padding-right: 50px;
  line-height: 1.4;
`;

const RightRow = styled(Row)`
  width: 100%;
  height: auto;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ItemCol = styled(Col)`
  height: auto;
  min-width: 360px;
  min-height: 330px;
`;

const Ceoquote = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 30px;
`;

const Des = styled.span`
  font-size: 16px;
  font-weight: 200;
  line-height: 1;
  font-style: italic;
  a {
    font-weight: 300;
    text-decoration-line: underline;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding-bottom: 30px;
`;

const SocialFollow = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export default function Introduce() {
  return (
    <Area>
      <LeftOnscreen>
        <span>GRACIAS</span>
      </LeftOnscreen>
      <RightOnscreen>
        <RightRow>
          <ItemCol sm={3}>
            <Ceoquote>Esta guía es un proyecto de:</Ceoquote>
            <Des>
              Directores:
              <br />
              A.G. Pinto
              <br />
              Maria Jesús Pérez Granda
              <br />
              Jose Luis de la Serna
              <br />
              <br />
              Guión y producción: El Extraordinario
              <br />
              <Link href="#">
                <a>¿Alguna duda? Contacta con Nosotros</a>
              </Link>
            </Des>
          </ItemCol>
          <ItemCol sm={5}>
            <Title>HISTORIA SONORA</Title>
            <LogoBox />
            <Title>SÍGUENOS</Title>
            <SocialFollow>
              <Link href="#">
                <a>Instagram</a>
              </Link>
            </SocialFollow>
          </ItemCol>
        </RightRow>
      </RightOnscreen>
    </Area>
  );
}

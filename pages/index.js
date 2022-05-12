import styled from "styled-components";
import { Container } from "react-bootstrap";

const Area = styled(Container)`
  width: 100%;
  height: 150vh;
  background-color: pink;
`;

export default function Home() {
  return <Area></Area>;
}

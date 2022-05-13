import styled from "styled-components";
import { Container } from "react-bootstrap";
import WhatIsThis from "../components/content/WhatIsThis";
import HistorySound from "../components/content/HistorySound";

const ScrollDownActive = styled.div``;

export default function Home() {
  return (
    <>
      <ScrollDownActive></ScrollDownActive>
      <WhatIsThis></WhatIsThis>
      <HistorySound></HistorySound>
    </>
  );
}

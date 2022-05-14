import styled from "styled-components";
import { Container } from "react-bootstrap";
import WhatIsThis from "../components/content/WhatIsThis";
import FullContent from "../components/content/FullContent";
import HistorySound from "../components/content/HistorySound";

const Area = styled.div``;

const Main = styled.div`
  height: 1700px;
  position: fixed;
`;

const ScrollDownActive = styled.div``;

export default function Home() {
  return (
    <Area>
      <Main />
      <ScrollDownActive></ScrollDownActive>
      <WhatIsThis></WhatIsThis>
      <FullContent></FullContent>
      <HistorySound></HistorySound>
    </Area>
  );
}

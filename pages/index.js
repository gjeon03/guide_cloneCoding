import styled from "styled-components";
import { Container } from "react-bootstrap";
import WhatIsThis from "../components/content/WhatIsThis";

const Area = styled(Container)`
  width: 100%;
  height: 150vh;
  background-color: pink;
`;

export default function Home() {
  return <WhatIsThis></WhatIsThis>;
}

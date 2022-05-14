import Footer from "./Footer";
import Header from "./Header/Header.js";
import styled from "styled-components";
import { useEffect, useState } from "react";

const layoutArea = styled.div`
  width: 500px;
  height: 500px;
  background-color: pink;
`;

const MouseCustom = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  span {
    width: 75px;
  }
`;

export default function Layout({ children }) {
  // const [mousePos, setMousePos] = useState([0, 0]);
  // const handleMouseMove = (e) => {
  //   setMousePos([e.clientX, e.clientY]);
  // };
  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);
  // }, []);
  // useEffect(() => {
  //   console.log(mousePos[0], mousePos[1]);
  // }, [mousePos]);
  return (
    <>
      {/* <layoutArea>
        <MouseCustom
          style={{ transform: `translate(${mousePos[0]}px, ${mousePos[1]}px)` }}
        >
          <span>Explora el Contenido</span>
        </MouseCustom>
      </layoutArea> */}
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

import { useState } from "react";
import styled from "styled-components";
import SideMenu from "../SideMenu";

const MenuBtn = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  background-color: #edece7;
  cursor: pointer;
  &:hover :last-child {
    transform: translateX(-10px);
  }
`;

const WhiteArea = styled.div`
  width: 40px;
  height: 60px;
  border-left: 1px solid black;
  position: absolute;
  left: 29px;
  background-color: white;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/menu_btn_lines.svg");
  transition: transform 0.2s;
`;

export default function MenuIcon() {
  const [menuOnOff, setMenuOnOff] = useState(false);
  const handleMeneOn = () => {
    setMenuOnOff(true);
    document.body.style.overflow = "hidden";
  };
  const handleMeneOff = () => {
    setMenuOnOff(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <SideMenu menuOnOff={menuOnOff} handleMeneOff={handleMeneOff} />
      <MenuBtn onClick={handleMeneOn}>
        <WhiteArea />
      </MenuBtn>
    </>
  );
}

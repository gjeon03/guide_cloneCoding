import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const Area = styled.header`
  width: 100%;
  position: fixed;
  top: 30px;
  left: 0;
  padding: 0px 50px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto auto;
`;

const Logo = styled.a`
  display: flex;
  font-size: 30px;
  line-height: 1;
  align-items: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
`;

const Absolute = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

const CircleText = styled(Absolute)`
  /* transform: rotate(-0.00110069deg); */
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/logo_text.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all ease-in-out;
`;

const CircleArrow = styled(Absolute)`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/logo_text_arrow.svg");
`;

const HeaderName = styled.div`
  margin-left: 28px;
`;

const bounce = keyframes`
  0% {
    transform: scale(1.05);
  }
  33% {
    transform: scale(1);
  }
  66% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const headset1 = keyframes`
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.5;
  }
`;

const headset2 = keyframes`
  33% {
  }
  66% {
    opacity: 1;
  }
`;

const History = styled.a`
  width: auto;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 23px;
    margin-right: 20px;
    font-weight: 200;
    position: absolute;
  }
  &:hover {
    animation: ${bounce} 1s infinite ease-in-out;
  }
  &:hover :nth-child(3) {
    animation: ${headset1} 1s infinite ease-in-out;
  }
  &:hover :nth-child(4) {
    animation: ${headset2} 1s infinite ease-in-out;
  }
`;

const HistoryBox = styled.div`
  width: 255px;
  height: 60px;
  padding: 13px 80px 17px 25px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #ffffff;
  ${(props) => (!props.$history ? `display: none;` : "display: inline")}
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0;
  top: 0;
`;

const HeadsetIcon1 = styled(Icon)`
  ${(props) =>
    !props.$history &&
    `border: 1px solid black;
    border-radius: 30px;
    background-color: white;`}
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_1.svg");
`;

const HeadsetIcon2 = styled(Icon)`
  opacity: 0;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_2.svg");
`;
const HeadsetIcon3 = styled(Icon)`
  opacity: 0;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_3.svg");
`;

const SearchBar = styled.div`
  width: 320px;
  height: 60px;
  background-color: #edece7;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  &:hover :last-child :first-child {
    transform: scale(0.85);
  }
`;

const SearchInput = styled.input`
  width: 205px;
  border: none;
  background-color: #edece7;
  font-size: 20px;
  font-weight: 200;
  padding: 0 26px;
  :focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;
`;

const SearchBtnBg = styled(Absolute)`
  border-radius: 50%;
  background-color: black;
  transition: transform 0.2s ease-in;
`;

const SearchBtnIcon = styled(Absolute)`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/search_icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 63px;
`;

const MenuBtn = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
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

export default function Header() {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [1, -1], [-50, 50]);
  const [history, setHistory] = useState(null);
  const [search, setSearch] = useState(null);
  const historySet = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1140) {
      setHistory(false);
    } else {
      setHistory(true);
    }
    if (windowWidth <= 920) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  };
  const handleResize = () => {
    historySet();
  };
  useEffect(() => {
    historySet();
    window.addEventListener("resize", handleResize);
  }, []);
  //https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/search_icon_dark.svg
  return (
    <Area>
      <Link href="/">
        <Logo>
          <Circle>
            <CircleText style={{ rotate }} />
            <CircleArrow />
          </Circle>
          <HeaderName>
            Guía
            <br />
            de Cirugía
            <br />
            Cardíaca
          </HeaderName>
        </Logo>
      </Link>
      <Link href="#">
        <History>
          <HistoryBox $history={history}>
            <span>Historia Sonora</span>
          </HistoryBox>
          <HeadsetIcon1 $history={history} />
          <HeadsetIcon2 />
          <HeadsetIcon3 />
        </History>
      </Link>
      <SearchBar>
        <SearchInput type="text" placeholder="Buscar tarjeta..." />
        <SearchBtn>
          <SearchBtnBg />
          <SearchBtnIcon />
        </SearchBtn>
      </SearchBar>
      <MenuBtn>
        <WhiteArea />
      </MenuBtn>
    </Area>
  );
}

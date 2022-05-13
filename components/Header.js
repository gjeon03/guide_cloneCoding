import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "./common/styles/bounce";

const Area = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 99;
  ${(props) =>
    props.$history
      ? `top: 30px;
    padding: 0px 50px;`
      : `top: 20px;
    padding: 0px 20px;`}
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto auto;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const Circle = styled.div`
  ${(props) =>
    props.$logo
      ? `width: 120px;
  height: 120px;`
      : `width: 80px;
  height: 80px;`}

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
  ${(props) => (props.$logo ? `font-size: 30px;` : `font-size: 22px;`)}
  line-height: 1;
  margin-left: 28px;
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
  min-width: 60px;
  position: relative;
  display: grid;
  margin-right: 20px;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 22px;
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
  width: auto;
  min-width: 60px;
  height: 60px;
  display: grid;
  position: relative;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  ${(props) => (props.$logo ? `display: grid;` : `display: none;`)}
  &:hover :last-child :first-child {
    transform: scale(0.85);
  }
`;

const SearchBox = styled.div`
  height: 60px;
  background-color: #edece7;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
  z-index: 2;
  ${(props) => {
    if (props.$search) {
      return `width: 320px; position: static; display: inline;`;
    } else {
      if (props.$searchHover) {
        return `width: 255px; position: absolute; display: inline; right: 0;`;
      }
      return `position: absolute; display: none; right: 0;`;
    }
  }}
`;

const SearchInput = styled.input`
  width: 205px;
  height: 100%;
  border: none;
  background-color: #edece7;
  font-size: 22px;
  font-weight: 200;
  padding: 0 26px;
  :focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0;
  z-index: 3;
  cursor: pointer;
`;

const SearchBtnBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 1px solid black;
  transition: transform 0.2s ease-in;
  ${(props) => (props.$search ? `background-color: black;` : ``)}
`;

const SearchBtnIcon = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  ${(props) =>
    props.$search
      ? `background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/search_icon.svg");`
      : `background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/search_icon_dark.svg");`}

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
  const { scrollY, scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollY, [5000, -5000], [-150, 150]);
  const [logo, setLogo] = useState(null);
  const [history, setHistory] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchHover, setSearchHover] = useState(false);
  const handleResize = () => {
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
    if (windowWidth <= 600) {
      setLogo(false);
    } else {
      setLogo(true);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const handleSearchHover = (flag) => {
    setSearchHover(flag);
  };
  return (
    <Area $history={history}>
      <Link href="/">
        <Logo>
          <Circle $logo={logo}>
            <CircleText style={{ rotate }} />
            <CircleArrow />
          </Circle>
          <HeaderName $logo={logo}>
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
      <SearchBar $logo={logo}>
        <SearchBox
          onMouseOver={() => handleSearchHover(true)}
          onMouseOut={() => handleSearchHover(false)}
          $search={search}
          $searchHover={searchHover}
        >
          <SearchInput type="text" placeholder="Buscar tarjeta..." />
        </SearchBox>
        <SearchBtn
          onMouseOver={() => handleSearchHover(true)}
          onMouseOut={() => handleSearchHover(false)}
        >
          <SearchBtnBg $search={search} />
          <SearchBtnIcon $search={search} />
        </SearchBtn>
      </SearchBar>
      <MenuBtn>
        <WhiteArea />
      </MenuBtn>
    </Area>
  );
}

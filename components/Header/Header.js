import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";
import MenuIcon from "./MenuIcon";
import SoundHistory from "./SoundHistory";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHeader = styled.div``;

const RightHeader = styled.div`
  display: flex;
`;

export default function Header() {
  const [logo, setLogo] = useState(null);
  const [history, setHistory] = useState(null);
  const [search, setSearch] = useState(null);
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

  return (
    <Area $history={history}>
      <LeftHeader>
        <HeaderLogo logo={logo} />
      </LeftHeader>
      <RightHeader>
        <SoundHistory history={history} />
        <Search logo={logo} search={search} />
        <MenuIcon />
      </RightHeader>
    </Area>
  );
}

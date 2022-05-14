import { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.div`
  width: auto;
  min-width: 60px;
  height: 60px;
  display: grid;
  position: relative;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  ${(props) =>
    props.$logo && props.$logo ? `display: grid;` : `display: none;`}
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

export default function Search({ logo, search }) {
  const [searchHover, setSearchHover] = useState(false);
  const handleSearchHover = (flag) => {
    setSearchHover(flag);
  };
  return (
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
  );
}

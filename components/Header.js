import Link from "next/link";
import styled from "styled-components";

const Area = styled.header`
  width: 100%;
  position: fixed;
  top: 30px;
  left: 0;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  font-size: 30px;
  line-height: 1;
  align-items: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
`;

const Absolute = styled.div`
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
`;

const CircleArrow = styled(Absolute)`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/logo_text_arrow.svg");
`;

const HeaderName = styled.div`
  margin-left: 28px;
`;

const History = styled.a`
  width: 255px;
  height: 60px;
  padding: 13px 80px 17px 25px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 23px;
    margin-right: 20px;
    font-weight: 200;
    position: absolute;
  }
`;

const HeadsetIcon1 = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 13px;
  top: 0;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_1.svg");
`;

const HeadsetIcon2 = styled.div`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_2.svg");
`;
const HeadsetIcon3 = styled.div`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_3.svg");
`;

const SearchBar = styled.div`
  width: 320px;
  height: 60px;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: space-between;
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
  transition: transform 0.2s;
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
`;

const WhiteArea = styled.div`
  width: 30px;
  height: 60px;
  border-left: 1px solid black;
  position: absolute;
  right: 0;
  background-color: white;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/menu_btn_lines.svg");
`;

export default function Header() {
  return (
    <Area>
      <Link href="/">
        <Logo>
          <Circle>
            <CircleText />
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
          <span>Historia Sonora</span>
          <HeadsetIcon1 />
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

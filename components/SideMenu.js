import { Toast } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import data from "../data/sideMenuCard.json";
import LogoBox from "./common/LogoBox";
import interestListData from "../data/interestList.json";
import SmallCard from "./common/SmallCard";
import CloseButton from "./common/CloseButton";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: end;
  z-index: 100;
`;

const BlankArea = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const MenuContainer = styled(Toast.Body)`
  width: 100%;
  height: 100%;
  max-width: 630px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 50px 40px;
  overflow-y: scroll;
`;

const MenuTop = styled.div`
  width: 100%;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
`;

const MenuTitle = styled.div``;

const MenuContentArea = styled.div`
  width: 100%;
  height: auto;
`;

const ConsultBox = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 30px;
`;

const RespBox = styled.div`
  width: 100%;
  margin-bottom: 120px;
`;

const RespBtnBox = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: 300;
  display: grid;
  grid-template-columns: 300px 170px;
  text-align: center;
  gap: 20px;
`;

const RespCol = styled.div`
  min-width: 145px;
  height: 50px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #edece7;
  }
`;

const HistoryBox = styled.div`
  margin-bottom: 120px;
`;

const HistoryMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const HistoryLeft = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const HistoryRight = styled.div``;

const InterestBox = styled.div``;

const InterestList = styled.ul`
  margin-bottom: 100px;
`;

const InterestItemBox = styled.div``;

const InterestItem = styled.li`
  font-size: 20px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  position: relative;
  top: -30px;
  cursor: pointer;
  &:hover div:nth-child(2) div:nth-child(1) {
    transform: translateY(-5px);
  }
  &:hover div:nth-child(2) div:nth-child(3) {
    opacity: 1;
  }
`;

const InterestItemIcon = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  div {
    position: absolute;
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-in-out;
  }
  div:last-child {
    border-radius: 30px;
    border: 1px solid black;
    opacity: 0;
  }
`;

const MenuFooter = styled.div`
  font-size: 12px;
`;

export default function SideMenu({ menuOnOff, handleMenuOff }) {
  return (
    <>
      {menuOnOff && (
        <Overlay>
          <BlankArea onClick={handleMenuOff} />
          <MenuContainer>
            <MenuTop>
              <MenuTitle>
                Ayuda
                <br />y material
                <br />
                adicional.
              </MenuTitle>
              <CloseButton
                bgColor="white"
                imageUrl="https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/close_menu_btn.svg"
                eventHandler={handleMenuOff}
              />
            </MenuTop>
            <MenuContentArea>
              <ConsultBox>
                <Title>ÚLTIMAS TARJETAS CONSULTADAS</Title>
                <SmallCard ressult={data.ressult} />
              </ConsultBox>
              <RespBox>
                <Title>LAS TARJETAS MÁS BUSCADAS</Title>
                <RespBtnBox>
                  <RespCol>
                    <span>Cirugía de válvulas cardíacas</span>
                  </RespCol>
                  <RespCol>
                    <span>Alimentación</span>
                  </RespCol>
                </RespBtnBox>
              </RespBox>
              <HistoryBox>
                <Title>HISTORIA SONORA</Title>
                <HistoryMenu>
                  <HistoryLeft>
                    <span>
                      También
                      <br />
                      disponible en:
                    </span>
                  </HistoryLeft>
                  <HistoryRight>
                    <LogoBox />
                  </HistoryRight>
                </HistoryMenu>
              </HistoryBox>
              <InterestBox>
                <Title>ENLACES DE INTERÉS</Title>
                <InterestList>
                  {interestListData.result.map((v, i) => (
                    <InterestItemBox key={i}>
                      <InterestItem>
                        <div>{v}</div>
                        <InterestItemIcon>
                          <div
                            style={{
                              backgroundImage: `url(https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/share_btn_arrow.svg)`,
                            }}
                          />
                          <div
                            style={{
                              backgroundImage: `url(https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/share_btn.svg)`,
                            }}
                          />
                          <div />
                        </InterestItemIcon>
                      </InterestItem>
                    </InterestItemBox>
                  ))}
                </InterestList>
              </InterestBox>
              <MenuFooter>
                <span>&copy; {new Date().getFullYear()}. JeonGyeongYeon</span>
              </MenuFooter>
            </MenuContentArea>
          </MenuContainer>
        </Overlay>
      )}
    </>
  );
}

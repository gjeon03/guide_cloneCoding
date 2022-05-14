import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import data from "../../soundInfo.json";
import { useState } from "react";
import { bounce } from "../common/styles/bounce";

const Area = styled.section`
  width: 100%;
  min-height: 650px;
  margin-top: 250px;
  padding-bottom: 130px;
  display: grid;
  grid-template-columns: 200px 1fr;
  position: relative;
`;

const LeftOnscreen = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  font-size: 14px;
  font-weight: 300;
`;

const RightOnscreen = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 50px;
  position: relative;
  top: -40px;
`;

const SoundList = styled.ul`
  list-style: none;
  margin-bottom: 40px;
`;

const ItemBox = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover li :last-child {
    visibility: visible;
    z-index: 3;
  }
`;

const SoundItem = styled.li`
  display: flex;
  font-size: 21px;
  align-items: center;
  padding: 40px 0;
  position: relative;
  &:hover div {
    transform: translate(20px, 20px);
    visibility: visible;
  }
  &:hover span:nth-child(1) {
    transform: translate(50px, 20px);
  }
  &:hover span:nth-child(2) {
    transform: translate(20px, 20px);
  }
  &:hover span:nth-child(3) {
    transform: translate(-20px, 20px);
  }
  span {
    position: relative;
    z-index: 4;
    transition: all 0.3s ease-in;
  }
  span:nth-child(1) {
    padding-right: 6vw;
    font-weight: 200;
  }
  span:nth-child(2) {
    flex-grow: 2;
  }
  span:nth-child(3) {
    font-weight: 200;
  }
`;

const ItemBg = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  visibility: hidden;
  z-index: 3;
  transition: all 0.2s ease-in-out;
`;

const LoadMoreSound = styled.div`
  width: 130px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 27.5px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    animation: ${bounce} 1s infinite ease-in-out;
  }
`;

export default function HistorySound() {
  const [listCount, setListCount] = useState(5);
  const handleOnClick = () => {
    setListCount(listCount + 5);
  };
  return (
    <Area>
      <LeftOnscreen>
        <span>
          HISTORIA
          <br />
          SONORA
        </span>
      </LeftOnscreen>
      <RightOnscreen>
        <SoundList>
          {data.result.map(
            (v, i) =>
              i < listCount && (
                <ItemBox key={i}>
                  <SoundItem>
                    <span>Episodio&nbsp;{String(i + 1).padStart(2, "0")}</span>
                    <span>{v.name}</span>
                    <span>{v.time}</span>
                    <ItemBg />
                  </SoundItem>
                </ItemBox>
              )
          )}
        </SoundList>
        {listCount < 15 && (
          <LoadMoreSound onClick={handleOnClick}>
            <span>Ver más</span>
          </LoadMoreSound>
        )}
      </RightOnscreen>
    </Area>
  );
}

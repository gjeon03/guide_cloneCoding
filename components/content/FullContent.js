import { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../data/contentInfo.json";
import CloseButton from "../common/CloseButton";
import SmallCard from "../common/SmallCard";

const Area = styled.section`
  width: 100%;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 200px 1fr;
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
  line-height: 1.4;
  position: relative;
  top: -20px;
  span {
    font-size: 5vw;
    font-weight: 100;
    margin-right: 50px;
    position: relative;
  }
  em {
    font-size: 0.5em;
    position: absolute;
  }
`;

const RightList = styled.span`
  cursor: pointer;
  ${(props) => (props.$color ? "color: #c1c1c1;" : "color: black;")}
`;

const CardArea = styled.div`
  width: 70vw;
  height: auto;
  min-height: 400px;
  margin: 50px 0 0 200px;
  position: relative;
  ${(props) => (props.$flag ? `display: inline;` : `display: none;`)}
`;

const CardBg = styled.div`
  width: 100%;
  height: 100%;
  max-width: 850px;
  min-height: 430px;
  padding-right: 50px;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/grid.svg");
  background-size: 50px;
  border: 1px solid black;
  position: relative;
  right: 0;
  padding: 70px 50px;
`;

const CloseBox = styled.div`
  position: absolute;
  top: 0;
  left: -80px;
`;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
`;

export default function FullContent() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [tempData, setTempData] = useState([]);
  const handleCardOff = () => {
    setTempData([]);
  };
  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };
  const handleMouseOut = () => {
    setHoverIndex(-1);
  };
  const handleOnClick = (num) => {
    const tmp = Array(num)
      .fill()
      .map((v) => {
        return { title: "Hello", color: "yellow" };
      });
    setTempData(tmp);
  };
  return (
    <Area>
      <LeftOnscreen>
        <span>CONTENIDO COMPLETO</span>
      </LeftOnscreen>
      <RightOnscreen>
        {data.result.map((v, i) => {
          return (
            <RightList
              key={i}
              $color={hoverIndex === -1 ? false : hoverIndex !== i}
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={handleMouseOut}
              onClick={() => handleOnClick(v.num)}
            >
              {v.text}
              <em>({v.num})</em>
            </RightList>
          );
        })}
      </RightOnscreen>
      <CardArea $flag={tempData.length > 0 ? true : false}>
        <CardBg>
          {tempData.length > 0 && (
            <CardBox>
              <SmallCard ressult={tempData} />
            </CardBox>
          )}
          <CloseBox>
            <CloseButton
              bgColor="black"
              eventHandler={handleCardOff}
              imageUrl="https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/close_btn.svg"
            />
          </CloseBox>
        </CardBg>
      </CardArea>
    </Area>
  );
}

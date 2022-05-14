import { useEffect, useState } from "react";
import styled from "styled-components";
import data from "../../contentInfo.json";

const Area = styled.section`
  width: 100%;
  min-height: 650px;
  margin-top: 250px;
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
  ${(props) => (props.$color ? "color: #969696;" : "color: black;")}
`;

export default function FullContent() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };
  const handleMouseOut = () => {
    setHoverIndex(-1);
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
            >
              {v.text}
              <em>({v.num})</em>
            </RightList>
          );
        })}
      </RightOnscreen>
    </Area>
  );
}

import { useEffect, useRef, useState } from "react";
import data from "../../cardInfo.json";
import styled from "styled-components";

const Area = styled.div`
  position: relative;
`;

const CardBox = styled.div`
  width: 570px;
  height: 420px;
  position: absolute;
  cursor: pointer;
  ${(props) => {
    if (props.$info.$idx !== 6) {
      return `top: ${150 * props.$info.$idx}px; left: ${
        props.$info.$size * props.$info.$idx
      }px; z-index: ${props.$info.$idx};`;
    } else {
      return `top: ${150 * props.$info.$idx}px; right: 0px; z-index: ${
        props.$info.$idx
      };`;
    }
  }}
`;

const Box = styled.div`
  width: 550px;
  height: 400px;
  position: absolute;
  border: 1px solid black;
`;

const ColorBox = styled(Box)`
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.$color};
`;

const CardContent = styled(Box)`
  width: 550px;
  height: 400px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardName = styled.span`
  font-size: 22px;
  padding: 30px 100px 30px 40px;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardNum = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  background-color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 300;
`;

const CardPhrase = styled.span`
  font-size: 16px;
  font-weight: 300;
  position: absolute;
  left: 14px;
  bottom: 44px;
  transform: rotate(-90deg);
`;

const CardImage = styled.div`
  width: 486px;
  height: 227px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 50px;
  background-image: url(${(props) => props.$url});
`;

export default function Card() {
  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);
  const [cardPos, setCardPos] = useState(null);
  const [zIndexValue, setZIndexValue] = useState(Array(7).fill(true));
  const handleResize = () => {
    const firstPosX = firstCardRef.current.getBoundingClientRect().x;
    const lastPosX = lastCardRef.current.getBoundingClientRect().x;

    setCardPos((lastPosX - firstPosX) / 6);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <Area>
      {data.result.map((v, i) => {
        let refValue = null;
        if (i === 0) refValue = firstCardRef;
        else if (i === 6) refValue = lastCardRef;
        return (
          <CardBox key={i} $info={{ $size: cardPos, $idx: i }} ref={refValue}>
            <ColorBox $color={v.color} />
            <CardContent>
              <CardName>{v.name}</CardName>
              <CardNum $color={v.color}>
                <span>{i + 1}</span>
              </CardNum>
              <CardPhrase>{v.phrase}</CardPhrase>
              <CardImage $url={v.colorUrl} />
            </CardContent>
          </CardBox>
        );
      })}
    </Area>
  );
}

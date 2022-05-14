import { useEffect, useRef, useState } from "react";
import data from "../../data/cardInfo.json";
import styled, { keyframes } from "styled-components";
import { useViewportScroll } from "framer-motion";

const Area = styled.div`
  position: relative;
`;

const CardAnimation = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1.01);
	}
`;

const CardBox = styled.div`
  width: 570px;
  height: 420px;
  position: absolute;
  cursor: pointer;
  ${(props) => {
    let str = `top: ${150 * props.$info.$idx}px;`;
    if (props.$info.$idx !== 6) {
      str += `left: ${props.$info.$size * props.$info.$idx}px;`;
    } else {
      str += `right: 0px;`;
    }
    if (props.$info.$hover === props.$info.$idx) {
      str += `z-index: 10;`;
    } else {
      str += `z-index: ${props.$info.$idx};`;
    }
    return str;
  }}
  &:hover :last-child {
    animation: ${CardAnimation} 0.5s ease-in-out;
    transform: scale(1.01);
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: ${(props) => (props.$hover ? "#edece7" : "white")};
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
  width: auto;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 10px;
  position: absolute;
  left: 46px;
  bottom: 20px;
  transform: rotate(-90deg);
  transform-origin: left;
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
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleResize = () => {
    const firstPosX = firstCardRef.current.getBoundingClientRect().x;
    const lastPosX = lastCardRef.current.getBoundingClientRect().x;
    setCardPos((lastPosX - firstPosX) / 6);
  };
  const handleMouseOver = (index) => {
    setHoverIndex(index);
  };
  const handleMouseOut = () => {
    setHoverIndex(null);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <Area>
      {data.result.map((v, i) => {
        let refValue = null;
        let urlValue = "colorUrl";
        let colorValue = v.color;
        let hoverValue = false;
        if (i === 0) refValue = firstCardRef;
        else if (i === 6) refValue = lastCardRef;
        if (hoverIndex !== null && hoverIndex !== i) {
          urlValue = "blackUrl";
          colorValue = "#edece7";
          hoverValue = true;
        }
        return (
          <CardBox
            key={i}
            $info={{ $size: cardPos, $idx: i, $hover: hoverIndex }}
            ref={refValue}
            onMouseOver={() => handleMouseOver(i)}
            onMouseOut={handleMouseOut}
          >
            <ColorBox $color={colorValue} />
            <CardContent $hover={hoverValue}>
              <CardName>{v.name}</CardName>
              <CardNum $color={colorValue}>
                <span>{i + 1}</span>
              </CardNum>
              <CardPhrase>{v.phrase}</CardPhrase>
              <CardImage $url={v[urlValue]} />
            </CardContent>
          </CardBox>
        );
      })}
    </Area>
  );
}

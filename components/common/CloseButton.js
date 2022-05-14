import styled from "styled-components";

const CloseBtn = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function CloseButton({ imageUrl, bgColor, eventHandler }) {
  return (
    <CloseBtn
      style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: bgColor }}
      onClick={eventHandler}
    />
  );
}

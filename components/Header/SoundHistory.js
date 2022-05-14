import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { bounce } from "../common/styles/bounce";

const headset1 = keyframes`
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.5;
  }
`;

const headset2 = keyframes`
  33% {
  }
  66% {
    opacity: 1;
  }
`;

const History = styled.a`
  width: auto;
  height: 60px;
  min-width: 60px;
  position: relative;
  display: grid;
  margin-right: 20px;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 22px;
    margin-right: 20px;
    font-weight: 200;
    position: absolute;
  }
  &:hover {
    animation: ${bounce} 1s infinite ease-in-out;
  }
  &:hover :nth-child(3) {
    animation: ${headset1} 1s infinite ease-in-out;
  }
  &:hover :nth-child(4) {
    animation: ${headset2} 1s infinite ease-in-out;
  }
`;

const HistoryBox = styled.div`
  width: 255px;
  height: 60px;
  padding: 13px 80px 17px 25px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #ffffff;
  ${(props) => (!props.$history ? `display: none;` : "display: inline")}
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0;
  top: 0;
`;

const HeadsetIcon1 = styled(Icon)`
  ${(props) =>
    !props.$history &&
    `border: 1px solid black;
    border-radius: 30px;
    background-color: white;`}
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_1.svg");
`;

const HeadsetIcon2 = styled(Icon)`
  opacity: 0;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_2.svg");
`;
const HeadsetIcon3 = styled(Icon)`
  opacity: 0;
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/headphones_icon_3.svg");
`;

export default function SoundHistory({ history }) {
  return (
    <Link href="#">
      <History>
        <HistoryBox $history={history}>
          <span>Historia Sonora</span>
        </HistoryBox>
        <HeadsetIcon1 $history={history} />
        <HeadsetIcon2 />
        <HeadsetIcon3 />
      </History>
    </Link>
  );
}

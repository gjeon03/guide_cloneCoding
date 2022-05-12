import styled from "styled-components";

const Area = styled.footer`
  width: auto;
  height: auto;
  position: fixed;
  left: 50px;
  bottom: 20px;
  font-size: 10px;
`;

export default function Footer() {
  return (
    <Area>
      <span>&copy; {new Date().getFullYear()}. JeonGyeongYeon</span>
    </Area>
  );
}

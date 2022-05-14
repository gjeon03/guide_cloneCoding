import { motion, useTransform, useViewportScroll } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

const Circle = styled.div`
  ${(props) =>
    props.$logo
      ? `width: 120px;
  height: 120px;`
      : `width: 80px;
  height: 80px;`}
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
`;

const Absolute = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

const CircleText = styled(Absolute)`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/logo_text.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: all ease-in-out;
`;

const CircleArrow = styled(Absolute)`
  background-image: url("https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/logo_text_arrow.svg");
`;

const HeaderName = styled.div`
  ${(props) => (props.$logo ? `font-size: 30px;` : `font-size: 22px;`)}
  line-height: 1;
  margin-left: 28px;
`;

export default function HeaderLogo({ logo }) {
  const { scrollY } = useViewportScroll();
  const rotate = useTransform(scrollY, [5000, -5000], [-150, 150]);
  return (
    <Link href="/">
      <Logo>
        <Circle $logo={logo}>
          <CircleText style={{ rotate }} />
          <CircleArrow />
        </Circle>
        <HeaderName $logo={logo}>
          Guía
          <br />
          de Cirugía
          <br />
          Cardíaca
        </HeaderName>
      </Logo>
    </Link>
  );
}

import Link from "next/link";
import data from "../../data/logoUrlInfo.json";
import styled from "styled-components";

const LogoArea = styled.div`
  max-width: 330px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function LogoBox() {
  return (
    <LogoArea>
      {data.result.map((v, i) => (
        <Link href="#" key={i}>
          <a>
            <Logo style={{ backgroundImage: `url(${v})` }}></Logo>
          </a>
        </Link>
      ))}
    </LogoArea>
  );
}

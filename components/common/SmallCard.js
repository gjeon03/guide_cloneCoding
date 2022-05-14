import styled from "styled-components";

const ConsultCardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 50px;
`;

const ConsultCard = styled.div`
  width: 250px;
  height: 320px;
  position: relative;
`;

const CardBg = styled.div`
  width: 230px;
  height: 300px;
  position: absolute;
  border: 1px solid black;
  left: 0;
  bottom: 0;
`;

const CardContent = styled.div`
  width: 230px;
  height: 300px;
  position: absolute;
  border: 1px solid black;
  top: 0;
  right: 0;
  background-color: white;
  overflow: hidden;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 22px;
    font-weight: 400;
  }
  transition: all 0.3s ease-in;
  &:hover {
    transform: translate(-8px, 8px);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 30px;
`;

export default function SmallCard({ ressult }) {
  return (
    <ConsultCardBox>
      {ressult.map((v, i) => (
        <ConsultCard key={i}>
          <CardBg style={{ backgroundColor: v.color }} />
          <CardContent>
            <span>{v.title}</span>
            <CardIcon
              style={{
                backgroundImage: `url(https://guiacirugiacardiaca.com/wp-content/themes/gcc/assets/img/icn_doc.svg)`,
              }}
            />
          </CardContent>
        </ConsultCard>
      ))}
    </ConsultCardBox>
  );
}

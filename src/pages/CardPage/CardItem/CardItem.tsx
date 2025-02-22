import styled from "styled-components";
import { Anime } from "../../../interfaces/anime";

const Container = styled.div`
  display: flex;

  gap: 1rem;
  background: #fafcfc;
  min-width: 450px;
  height: 275px;
  border-radius: 3px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContainerItem = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  img {
    width: 42%;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

const Cover = styled.div`
  z-index: 1;
  margin-left: -12.8rem;
  margin-top: 10.3rem;
  width: 42%;
  height: 40%;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.8rem;
  border-radius: 5px 5px 5px 5px;
`;

const TextCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const styleTextSummer: React.CSSProperties = {
  color: '#647380',
  fontWeight: '600', 
  letterSpacing: '.02em',
}

const CardItem: React.FC<Anime> = ({ ...item }) => {
  return (
    <Container>
      <ContainerItem>
        <img src={item.coverImage.extraLarge} />
        <Cover>{item.title.english}</Cover>

        <TextCard>
          <span style={styleTextSummer}>{`${item.season
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("")} ${item.startDate.year}`}</span>

          <span>{item.episodes}</span>
          {/* <span>{item.description}</span> */}
        </TextCard>
      </ContainerItem>
    </Container>
  );
};

export default CardItem;

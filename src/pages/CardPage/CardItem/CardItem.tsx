import styled from "styled-components";
import { Anime } from "../../../interfaces/anime";

const Container = styled.div`
  display: flex;

  gap: 1rem;
  background: #fafcfc;
  min-width: 450px;
  height: 265px;
  border-radius: 5px;
  /* padding: 1rem; */
`;

const ContainerItem = styled.div`
  img {
    height: 100%;
  }
`;

const TextCard = styled.div`
`

const CardItem: React.FC<Anime> = ({ ...item }) => {
  return (
    <Container>
      <ContainerItem>
        <img src={item.coverImage.extraLarge} />

        <TextCard>
            <span>{item.episodes}</span>

        </TextCard>


      </ContainerItem>
    </Container>
  );
};

export default CardItem;

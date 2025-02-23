import styled from "styled-components";
import { Anime } from "../../../interfaces/anime";

const Container = styled.div`
  display: flex;

  gap: 1rem;
  background: #fafcfc;
  min-width: 450px;
  max-width: 450px;
  height: 275px;
  border-radius: 3px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContainerItem = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  img {
    width: 200px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

const Cover = styled.div`
  z-index: 1;
  margin-left: -13.5rem;
  margin-top: 10.3rem;
  width: 200px;
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
  width: 45%;
  height: 60%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const styleTextSummer: React.CSSProperties = {
  color: "#647380",
  fontWeight: "600",
  letterSpacing: ".02em",
};

const styleSubtitle: React.CSSProperties = {
  color: "#748899",
};

const styleDescription: React.CSSProperties = {
  paddingTop: '1rem',
  fontSize: '.8rem',
  color: '#8ba0b2',
}

const CardItem: React.FC<Anime> = ({ ...item }) => {

  const showEpOrTime = (ep: number, time: number) => {
    const timeHour = Math.floor(time / 60);
    const remainingMinuts = time % 60;

    return ep > 1
      ? `${ep} episodes`
      : `${timeHour} hour, ${remainingMinuts} mins`;
  };

  const capitalize = (text: string) => {
      return text.toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")    
  }

  const resumeText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  

  return (
    <Container>
      <ContainerItem>
        <img src={item.coverImage.extraLarge} />
        <Cover>{item.title.english}</Cover>

        <TextCard>
          <span style={styleTextSummer}>{`${capitalize(item.season)} ${item.startDate.year}`}</span>

          <span style={styleSubtitle}>{`${capitalize(item.format)}  
          ${showEpOrTime(item.episodes,item.duration)}`}</span>
          <span style={styleDescription}>{resumeText(item.description, 150) }</span>
        </TextCard>
      </ContainerItem>
    </Container>
  );
};

export default CardItem;

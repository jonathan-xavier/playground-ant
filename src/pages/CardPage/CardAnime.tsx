
import { useMount } from "../../utils/use-mount";
import { getAllAnimeAl } from "../../services/animeService";
import { useState } from "react";
import { Anime } from "../../interfaces/anime";
import styled from "styled-components";
import CardItem from "./CardItem/CardItem";


const Flex = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    
    margin: -3rem;
`

const CardAnime: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>();

 
  useMount(async () => {
    // animeService.getSearchAnime()
    try {
      const response = await getAllAnimeAl();
      setAnimeList(response);
      console.log("card: ", response)
      console.log("state: ", animeList)
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Flex >
      {animeList?.map((item) => (
        <CardItem {...item}/>
      ))}
    </Flex>
  );
};

export default CardAnime;

import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Pokemon } from "../types/pokemon";
import { GetPokemons } from "../types/pokemons";
import {
  Grid,
  Flex,
  HStack,
  Badge,
  CircularProgress,
  Box,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Header } from "../components/header";
import { Card } from "../components/card";

function Home() {
  const [data, setData] = useState<Pokemon[]>([]);

  const fetchPokemons = async (offset: number = 0) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1200));

    const { data } = await api.get<GetPokemons>(`/pokemon?offset=${offset}`);

    const pokemons = await Promise.all(
      data.results.map(async (result) => {
        const { data } = await api.get<Pokemon>(`/pokemon/${result.name}`);

        return data;
      })
    );

    setData((prevData) => [...prevData, ...pokemons]);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Box className="App" bg="backgroundColor.500">
      <Flex justifyContent="center" alignItems="center">
        <Header />
      </Flex>
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchPokemons(data.length + 20)}
        hasMore={data.length < 1126}
        loader={
          <Flex w="100%" alignItems="center" justifyContent="center" my={4}>
            <CircularProgress isIndeterminate color="purple.300" />
          </Flex>
        }
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          maxWidth="1180px"
          mx="auto"
          gap={4}
          w="100%"
        >
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                img={`${item.sprites.other["official-artwork"].front_default}`}
                types={item.types}

              />
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
}

export default Home;

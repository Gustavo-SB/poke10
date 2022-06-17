import { useEffect, useState } from 'react'
import { api } from './services/api';
import {  GetPokemons } from './types/pokemons'
import {  Pokemon } from './types/pokemon'
import {Grid, Button, AspectRatio, Flex, HStack, Badge, Progress, CircularProgress} from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [data, setData] = useState<Pokemon[]>([])

  const fetchPokemons = async (offset: number = 0) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1200))

    const {data} = await api.get<GetPokemons>(`/pokemon?offset=${offset}`)

    const pokemons = await Promise.all(data.results.map(async(result) => {
      const {data} = await api.get<Pokemon>(`/pokemon/${result.name}`)

      return data
    }))

    setData((prevData) => [...prevData, ...pokemons])
  }

  useEffect(() => {
    fetchPokemons()   
  }, [])



  return (
    <div className="App">
      <h1>Poke10</h1>
      <InfiniteScroll dataLength={data.length} next={() => fetchPokemons(data.length + 20)} hasMore={data.length < 1126} loader={<Flex w="100%" alignItems="center" justifyContent="center" my={4}>
        <CircularProgress isIndeterminate color='purple.300' />
      </Flex>}>
        <Grid templateColumns="repeat(3, 1fr)" maxWidth="1180px" mx="auto" gap={4} w="100%">
          {data.map((item) => {
            return (
              <div key={item.name} >
                <img src={`${item.sprites.other['official-artwork'].front_default}`} alt={`${item.name}`} style={{
                  width: '100%'
                }}/>
                <h2>{item.name}</h2>

                <HStack>
                  {item.types.map((type) => {
                    return <Badge>{type.type.name}</Badge>
                  })}
                </HStack>
              </div>
            )
          })}          
        </Grid>
      </InfiniteScroll>
    </div>
  )
}

export default App

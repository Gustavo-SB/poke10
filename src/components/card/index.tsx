import { Badge, Box, HStack, Img, Text } from "@chakra-ui/react";
import { Type } from "../../types/pokemon";

interface Props {
  name: string;
  img: string;
  types: Type[];
}

export function Card({ name, img, types }: Props) {
  return (
    <Box bg="gray.100">
      <Img
        src={img}
        alt={name}
        width='100%'
      />
        <Text>
          {name}
        </Text>

      <HStack>
        {types.map((type) => {
          return <Badge>{type.type.name}</Badge>;
        })}
      </HStack>
    </Box>
  );
}

import { Badge, Box, HStack, Img, Text } from "@chakra-ui/react";
import { Type } from "../../types/pokemon";
import { UpperCase } from "./../../utils/toUpperCase";
import {Types, useTypes} from '../../hooks/useTypes'

interface Props {
  name: string;
  img: string;
  types: Type[];
}



export function Card({ name, img, types }: Props) {
  const {getColorByType} = useTypes()

  return (
    <Box bg="gray.100" borderRadius="10px">
      <Img src={img} alt={name} width="100%" />
      <Box p="1rem">
        <Text fontWeight="bold">{UpperCase(name)}</Text>

        <HStack>
          {types.map((type) => {
            return (
              <Badge
                bg={getColorByType(type.type.name as Types)}
                color="white"
                p="4px 1rem"
                borderRadius="5px"
              >
                {type.type.name}
              </Badge>
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}

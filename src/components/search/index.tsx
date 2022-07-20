import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { IconButton } from "../iconButton/index";

interface Props {
  onClick?: () => void;
  onSearchPokemon: (value: React.SetStateAction<string>) => void;
}

export function Search({ onClick, onSearchPokemon }: Props) {
  return (
    <InputGroup size="md">
      <Input placeholder="Search for a pokemon" onChange={(e: any) => {onSearchPokemon(e.target.value)}} />
      <InputRightElement width="4.5rem">
        <IconButton
          aria-label="search"
          h="1.75rem"
          size="sm"
          icon={<FiSearch color="#fff" />}
          onClick={onClick}
        />
      </InputRightElement>
    </InputGroup>
  );
}

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { IconButton } from "./../../atoms/IconButton/index";

interface Props {
  onClick?: () => void;
}

export function Search({ onClick }: Props) {
  return (
    <InputGroup size="md">
      <Input placeholder="Search for a pokemon" />
      <InputRightElement width="4.5rem">
        <IconButton
          aria-label="search"
          h="1.75rem"
          size="sm"
          icon={<FiSearch color="#000000" />}
          onClick={onClick}
        />
      </InputRightElement>
    </InputGroup>
  );
}

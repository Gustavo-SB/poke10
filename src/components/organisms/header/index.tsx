import { Flex, Text } from "@chakra-ui/react";
import { Menu } from "../../atoms/menu";
import { Search } from "../../molecules/search";

export function Header() {
  return (
    <Flex
      w={{
        base: "425px",
        md: "720px",
        lg: "1080px",
        xl: "1800px",
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text size="lg" fontWeight="bold">Poke10</Text>
      <Search />
      <Menu
        options={[
          { label: "Home", link: "/" },
          { label: "Not Found", link: "asuobfuasbf" },
        ]}
      />
    </Flex>
  )
}
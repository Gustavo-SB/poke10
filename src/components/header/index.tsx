import { Flex, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { Menu } from "../menu";
import { Search } from "../search";
import { Button } from "../button/index";



export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  const loged = false

  const NavButtons = () => {
    if (loged) {
      return (
        <HStack spacing={4}>
          <Button label="Home" link="/home" />
          <Button label="About" link="/about" />
          <Button label="Sair" link="/logout" />
        </HStack>
      )
    } else {
      return (
        <HStack spacing={4}>
          <Button label="Home" link="/home" />
          <Button label="About" link="/about" />
          <Button label="Login" link="/login" />
          <Button label="Register" link="/register" />
        </HStack>
      )
    }
  };

  return (
    <Flex
      w={{
        base: "425px",
        md: "720px",
        lg: "1080px",
        xl: "1800px",
      }}
      flexDirection={{
        base: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
    >
      <Text
        pb={{
          base: "0.5rem",
          md: "0px",
          lg: "0px",
          xl: "0px",
        }}
        color="primaryColor.500"
        size="lg"
        fontWeight="bold"
      >
        Poke10⚡
      </Text>
      <HStack>
        <Search />
        {isMobile ? (
          <Menu
            options={loged ? [
              { label: "Home", link: "/home" },
              { label: "About", link: "/about" },
              { label: "Sair", link: "/logout" },
            ] : [
              { label: "Home", link: "/" },
              { label: "About", link: "/about" },
              { label: "Login", link: "/login" },
              { label: "Register", link: "/register" },
            ]}
          />
        ) : (
          <NavButtons />
        )}
      </HStack>
    </Flex>
  );
}

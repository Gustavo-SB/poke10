import { useEffect, useState } from "react";
import {
  Grid,
  Flex,
  Text,
  HStack,
  Badge,
  CircularProgress,
  Button,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { Header } from "../components/organisms/Header";
import { Input } from "../components/atoms/Input";
// import { supabase} from "../supabase/supabase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      bg={"collBlack.500"}
      color={"white.500"}
    >
      <Flex
        w="100%"
        maxW={360}
        bg={"collBlack.200"}
        p={8}
        borderRadius={8}
        flexDir={"column"}
      >
        <Text> Registre-se </Text>

        <Input
          display="flex"
          justifyContent="center"
          alignItems="center"
          focusBorderColor="primaryColor.500"
          bgColor="collBlack.500"
          variant={"filled"}
          _hover={{ bg: "collBlack.500" }}
          size="lg"
          name="email"
          label="E-mail"
          isDisabled={false}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <VStack>
          <Input
            name="password"
            label="Password"
            bgColor="collBlack.500"
            focusBorderColor="primaryColor.500"
            variant={"filled"}
            size="lg"
            _hover={{ bg: "collBlack.500" }}
            isDisabled={false}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox onChange={() => setShowPassword(!showPassword)}>
            <Text>Show Password</Text>
          </Checkbox>
        </VStack>
        <Button type="submit" mt={6} colorScheme="purple" size={"lg"}>
          Cadastrar
        </Button>
      </Flex>
    </Flex>
  );
}
export default Register;

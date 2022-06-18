import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label: string;
}

export function Button({ label, ...rest }: Props) {
  return (
      <ChakraButton
        colorScheme="SecondaryColor"
        {...rest}
      >
        {label}
      </ChakraButton>
  );
}
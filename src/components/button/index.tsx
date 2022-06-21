import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

interface Props extends ButtonProps {
  label: string;
  link?: string;
}

export function Button({ label, link, ...rest }: Props) {
  return (
      <ChakraButton
        colorScheme="primaryColor"
        {...rest}
      >
        {link ? (
          <Link
            to={link}
          >
            {label}
          </Link>
        ) : (
          label
        )}
      </ChakraButton>
  );
}
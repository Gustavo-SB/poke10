import { IconButton as ChakraIconButton, IconButtonProps } from "@chakra-ui/react"
import { FiCircle } from "react-icons/fi"

interface Props extends IconButtonProps {
  icon: JSX.Element;
}

export function IconButton({ icon, ...rest }: Props) {
  return (
    <ChakraIconButton
      colorScheme="SecondaryColor"
      icon={icon}
      {...rest}
    />
  )
}
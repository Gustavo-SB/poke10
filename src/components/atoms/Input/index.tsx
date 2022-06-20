import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
    label: string;
    name: string;
    isDisabled: boolean;
}

export function Input({ label, name, isDisabled = false, ...rest }: Props) {
  return (
    <FormControl id={name} >
        <FormLabel>
            {label}
        </FormLabel>
        <ChakraInput 
        disabled={isDisabled}
        {...rest}
        />
    </FormControl>

  )

}

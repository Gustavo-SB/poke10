import { Menu as ChakraMenu, MenuButton, MenuButtonProps, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type OptionProps = {
  label: string;
  link: string;
}

interface Props extends MenuButtonProps {
  options: OptionProps[];
}

export function Menu({ options, ...rest }: Props) {
  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        aria-label="menu"
        background="secondaryColor.500"
        icon={<FiMenu color="#fff" />}
      />
      <MenuList>
        {options.map((item) => {
          return (
            <MenuItem key={item.label}>
              <Link to={item.link}>{item.label}</Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
}
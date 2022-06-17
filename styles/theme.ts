import { background, extendTheme } from "@chakra-ui/react";
import * as ReactDOMimport from 'react-dom/client';

const colors = {
    backgroundColor: {
        500: '#242357',
        600: '#242357',
        700: '#242357',
        800: '#242357',
        900: '#242357',
    },
    PrimaryColor: {
        500: "#5856D6",
        600: "#5856D6",
        700: "#5856D6",
        800: "#5856D6",
        900: "#5856D6",
    SecondaryColor: {
        500: "#5D5BE3",
        600: "#5D5BE3",
        700: "#5D5BE3",
        800: "#5D5BE3",
        900: "#5D5BE3",
    },
    TertiaryColor: {
        500: "#4E4CBD",
        600: "#4E4CBD",
        700: "#4E4CBD",
        800: "#4E4CBD",
        900: "#4E4CBD",
    },
    QuaternaryColor: {
        500: "#3E3C96",
        600: "#3E3C96",
        700: "#3E3C96",
        800: "#3E3C96",
    }

}
}

export const theme = extendTheme({ colors });

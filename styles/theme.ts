import { background, extendTheme } from "@chakra-ui/react";
import * as ReactDOMimport from "react-dom/client";

const colors = {
  backgroundColor: {
    500: "#242357",
    600: "#1f1e4e",
    700: "#1b1a3e",
    800: "#171630",
    900: "#0f0e1e",
  },
  primaryColor: {
    500: "#5856D6",
    600: "#4B4AD0",
    700: "#3F3FC9",
    800: "#2E2EB2",
    900: "#1E1E9C",
  },
  secondaryColor: {
    500: "#5D5BE3",
    600: "#4F4FE7",
    700: "#4349E1",
    800: "#2E2EDD",
    900: "#1E1ED7",
  },
  tertiaryColor: {
    500: "#4E4CBD",
    600: "#4B49BD",
    700: "#3F3DBD",
    800: "#2E2DBD",
    900: "#1E1DBD",
  },
  quaternaryColor: {
    500: "#3E3C96",
    600: "#3B3996",
    700: "#3A3696",
    800: "#2E2E96",
    900: "#1E1E96",
  },
  white: {
    500: "#FFFFFF",
    600: "#F5F5F5",
    700: "#EBEBEB",
    800: "#DEDEDE",
    900: "#BDBDBD",
  },
  collBlack: {
    200: "#262626",
    300: "#1F1F1F",
    400: "#171717",
    500: "#0F0F0F",
    600: "#0E0E0E",
    700: "#0D0D0D",
  },
};

export const theme = extendTheme({ colors });

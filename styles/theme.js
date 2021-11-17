import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: "Montserrat",
  heading: "Montserrat",
};

const colors = {
  tosca: {
    400: "#75A797",
    600: "#4A7265",
  },
  whitetosca: "F8F8F8",
  background: {
    light: "whitetosca",
    dark: "gray.800",
  },
  card: {
    light: "white",
    dark: "black",
  },
  content: {
    light: "black",
    dark: "white",
  },
};

const breakpoints = createBreakpoints({
  sm: "40rem",
  md: "52rem",
  lg: "62rem",
});

const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px",
};

const fontWeight = {
  light: 300,
  normal: 400,
  bold: 700,
};

const customTheme = extendTheme({
  colors,
  fonts,
  breakpoints,
  fontSize,
  fontWeight,
});

export default customTheme;

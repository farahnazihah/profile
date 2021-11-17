import {
  useColorMode,
  ChakraProvider,
  ColorModeProvider,
  Box,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${colorMode === "light" ? "#F8F8F8" : "#1A202C"};
          transition: all 0.25s linear 0s;
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: "true,",
        }}
      >
        <GlobalStyle>
          <Box mx={["1rem", "20%"]} mt={["0", "2rem"]}>
            <Component {...pageProps} />
          </Box>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;

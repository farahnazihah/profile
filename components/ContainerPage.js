import React from "react";
import { useColorMode, Box, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContainerPage = ({ children }) => {
  const { colorMode } = useColorMode({});

  return (
    <Box
      justifyContent="center"
      flexDirection="column"
      color={"content." + colorMode}
      px="0rem"
    >
      <Navbar />
      <Flex as="main" flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default ContainerPage;

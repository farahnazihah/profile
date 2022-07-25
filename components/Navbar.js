import { useColorMode, Flex, HStack, Spacer, Button } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import NextLink from "next/link";

import styled from "@emotion/styled";

const Navbar = () => {
  const { colorMode } = useColorMode({});

  const Navbar = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    background: ${colorMode === "light" ? "#F8F8F8" : "#1A202C"};
  `;

  return (
    <Navbar width="100%" as="nav" py={2} mb={[0, 0, 8]}>
      <HStack spacing="2rem">
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={0}
            style={{ color: "tosca.400" }}
            _hover={{ color: "tosca.600" }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/blog/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={0}
            style={{ color: "tosca.400" }}
            _hover={{ color: "tosca.600" }}
          >
            Blog
          </Button>
        </NextLink>
      </HStack>
      <Spacer />
      <DarkModeSwitch />
    </Navbar>
  );
};

export default Navbar;

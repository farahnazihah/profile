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
  `;

  return (
    <Navbar
      width="100%"
      as="nav"
      py={2}
      mb={[0, 0, 8]}
      bg={colorMode == "light" ? "whitetosca" : "gray.800"}
    >
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
        <NextLink href="/projects/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={0}
            style={{ color: "tosca.400" }}
            _hover={{ color: "tosca.600" }}
          >
            Projects
          </Button>
        </NextLink>
      </HStack>
      <Spacer />
      <DarkModeSwitch />
    </Navbar>
  );
};

export default Navbar;

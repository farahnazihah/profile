import {
  Text,
  Box,
  Image,
  HStack,
  Flex,
  Icon,
  Link,
  Stack,
  useColorMode,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";

export default function ProfileDescription() {
  const { colorMode } = useColorMode({});
  return (
    <>
      <Flex
        px={["1rem", "1rem", "5%"]}
        direction={["column", "column", "row"]}
        my="3rem"
        align="center"
        mx="auto"
      >
        <Image
          borderRadius="full"
          boxSize={[120, 120, 150]}
          src="profile.jpg"
          alt="Farah Nazihah"
          mr={["1rem", "1rem", "2rem"]}
        />
        <Stack
          maxW="40rem"
          align={["center", "center", "initial"]}
          spacing="0.1rem"
        >
          <Text fontWeight="Bold" fontSize={["2xl", "2xl", "3xl"]}>
            Farah Nazihah
          </Text>
          <Text
            fontSize={["s", "s", "md"]}
            align={["center", "center", "left"]}
          >
            I’m a UI/UX Designer and Frontend Developer that currently studying
            computer science in Universitas Indonesia.
          </Text>
          <HStack>
            <Icon
              mr="10px"
              as={ImLocation}
              w={["12px", "12px", "16px"]}
              h="auto"
              display={["none", "none", "block"]}
            />
            <Text fontSize={["s", "s", "md"]}>Depok, Indonesia</Text>
          </HStack>
          <HStack>
            <Icon
              mr="10px"
              as={MdEmail}
              w={["12px", "12px", "16px"]}
              h="auto"
              display={["none", "none", "block"]}
            />
            <Text fontSize={["s", "s", "md"]}>
              farahnazihah102[at]gmail.com
            </Text>
          </HStack>
          <Flex align="center" direction={["column", "column", "row"]}>
            <HStack pt="1rem" spacing="2rem">
              <Link
                href="https://www.linkedin.com/in/farah-nazihah/"
                isExternal
              >
                <Icon
                  as={FaLinkedinIn}
                  w="2em"
                  h="auto"
                  _hover={{ color: "tosca.600" }}
                />
              </Link>
              <Link href="https://github.com/farahnazihah/" isExternal>
                <Icon
                  as={FaGithub}
                  w="2em"
                  h="auto"
                  _hover={{ color: "tosca.600" }}
                />
              </Link>
              <Link href="https://gitlab.com/farahnazihah/" isExternal>
                <Icon
                  as={FaGitlab}
                  w="2em"
                  h="auto"
                  _hover={{ color: "tosca.600" }}
                />
              </Link>
            </HStack>
            <Spacer />
            {/* <Button
              color="white"
              bgColor="tosca.400"
              _hover={{ bgColor: "tosca.600" }}
            >
              Download CV
            </Button> */}
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}

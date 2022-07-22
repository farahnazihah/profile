import { Box, Center, Icon, HStack, Link } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Center mt={"auto"}>
      <Box display="block" mt="3rem">
        <Center>
          <HStack spacing={["1em", "2em", "4em"]} p={[1, 2, 4]}>
            <Link href="https://www.instagram.com/frhnzh_/" isExternal>
              <Icon
                as={BsInstagram}
                w={["2em", "3em", "3em"]}
                h="auto"
                color="tosca.400"
                _hover={{ color: "tosca.600" }}
              />
            </Link>
            <Link href="https://twitter.com/hiddenmemorybox" isExternal>
              <Icon
                as={FiTwitter}
                w={["2em", "3em", "3em"]}
                h="auto"
                color="tosca.400"
                _hover={{ color: "tosca.600" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/farah-nazihah/" isExternal>
              <Icon
                as={FaLinkedinIn}
                w={["2em", "3em", "3em"]}
                h="auto"
                color="tosca.400"
                _hover={{ color: "tosca.600" }}
              />
            </Link>
            <Link
              href="https://web.facebook.com/people/Farah-Nazihah/100006401327477/"
              isExternal
            >
              <Icon
                as={FaFacebookF}
                w={["2em", "3em", "3em"]}
                h="auto"
                color="tosca.400"
                _hover={{ color: "tosca.600" }}
              />
            </Link>
          </HStack>
        </Center>
        <Center fontSize={["s", "m", "l"]} w="100%" pb={[1, 2, 4]}>
          © 2021 betaorionis
        </Center>
      </Box>
    </Center>
  );
};

export default Footer;

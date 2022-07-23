import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Center,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function BlogCard() {
  const handleLike = () => {};
  return (
    <>
      <Flex p={"24px"} bgColor={"black"} borderRadius="20px" flexDir={"column"}>
        <Heading as={"h5"} fontSize={["3xl"]} color={"tosca.400"} mb="1rem">
          namanya apa judulnya misal panjang
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <HStack justifyContent={"center"} spacing={"3rem"}>
          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={AiOutlineHeart}
              w={["2em", "3em", "3em"]}
              h="auto"
              _hover={{ color: "tosca.600" }}
              onCLick={() => handleLike()}
            />
            <Text textAlign={"center"}>9,999 likes</Text>
          </Center>

          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={HiOutlinePencilAlt}
              w={["2em", "3em", "3em"]}
              h="auto"
              _hover={{ color: "tosca.600" }}
              onCLick={() => handleLike()}
            />
            <Text textAlign={"center"}>Edit</Text>
          </Center>
        </HStack>
      </Flex>
    </>
  );
}

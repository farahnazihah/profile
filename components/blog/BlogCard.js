import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Center,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function BlogCard({ data }) {
  const [likes, setLikes] = useState(data.like);
  const [solidheart, setSolidHeart] = useState(false);
  const handleLike = () => {
    setLikes(likes + 1);
    setSolidHeart(true);
    setTimeout(() => {
      setSolidHeart(false);
    }, 300);
  };
  return (
    <>
      <Flex
        p={"24px"}
        bgColor={"black"}
        borderRadius="20px"
        flexDir={"column"}
        mt="3rem"
      >
        <Heading as={"h5"} fontSize={["3xl"]} color={"tosca.400"} mb="1rem">
          {data.title}
        </Heading>
        <Text>{data.content}</Text>
        <HStack justifyContent={"center"} spacing={"3rem"}>
          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={solidheart ? AiFillHeart : AiOutlineHeart}
              w={["2em", "3em", "3em"]}
              h="auto"
              _hover={{ color: "tosca.600" }}
              onClick={() => handleLike()}
            />
            <Text textAlign={"center"}>{likes} likes</Text>
          </Center>

          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={HiOutlinePencilAlt}
              w={["2em", "3em", "3em"]}
              h="auto"
              _hover={{ color: "tosca.600" }}
              onClick={() => handleEdit()}
            />
            <Text textAlign={"center"}>Edit</Text>
          </Center>
        </HStack>
      </Flex>
    </>
  );
}

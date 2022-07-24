import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Center,
  HStack,
} from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { likeBlog } from "../../api/";

export default function BlogCard({ data }) {
  const [likes, setLikes] = useState(data.like);
  const [solidheart, setSolidHeart] = useState(false);

  const handleLike = (id) => {
    try {
      const res = likeBlog(id);
      setLikes(likes + 1);
      setSolidHeart(true);
      setTimeout(() => {
        setSolidHeart(false);
      }, 300);
    } catch (error) {
      return "";
    }
  };

  const handleEdit = (blogId) => {
    Router.push({
      pathname: "/blog/edit",
      query: { id: blogId },
    });
  };

  return (
    <>
      <Flex
        p={"24px"}
        bgColor={"black"}
        borderRadius="20px"
        flexDir={"column"}
        my="1rem"
      >
        <Heading as={"h5"} fontSize={["3xl"]} color={"tosca.400"} mb="1rem">
          {data.title}
        </Heading>
        <Text>{data.content}</Text>
        <HStack justifyContent={"center"} spacing={"3rem"}>
          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={solidheart ? AiFillHeart : AiOutlineHeart}
              w="2rem"
              h="auto"
              _hover={{ color: "tosca.600" }}
              onClick={() => handleLike(data.id)}
            />
            <Text textAlign={"center"}>{likes} likes</Text>
          </Center>

          <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
            <Icon
              as={HiOutlinePencilAlt}
              w={"2rem"}
              h="auto"
              _hover={{ color: "tosca.600" }}
              onClick={() => handleEdit(data.id)}
            />
            <Text textAlign={"center"}>Edit</Text>
          </Center>
        </HStack>
      </Flex>
    </>
  );
}

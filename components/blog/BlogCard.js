import {
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  Center,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import Router from "next/router";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Cookies from "js-cookie";
import { likeBlog } from "../../api/";
import { BlogContext } from "@pages/blog";

export default function BlogCard({ data }) {
  const { colorMode } = useColorMode();
  const creatorMode = useContext(BlogContext);
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

  const handleEdit = (data) => {
    console.log(data);
    Cookies.set("title", data.title);
    Cookies.set("content", data.content);
    Router.push({
      pathname: "/blog/edit",
      query: { id: data.id },
    });
  };

  return (
    <>
      <Flex
        p={"24px"}
        bgColor={colorMode === "light" ? "card.light" : "card.dark"}
        borderRadius="20px"
        flexDir={"column"}
        my="1rem"
        boxShadow={"md"}
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
          {creatorMode && (
            <Center m={"1rem"} color="tosca.400" flexDirection={"column"}>
              <Icon
                as={HiOutlinePencilAlt}
                w={"2rem"}
                h="auto"
                _hover={{ color: "tosca.600" }}
                onClick={() => handleEdit(data)}
              />
              <Text textAlign={"center"}>Edit</Text>
            </Center>
          )}
        </HStack>
      </Flex>
    </>
  );
}

import ContainerPage from "@components/ContainerPage";
import BlogCard from "@components/blog/BlogCard";
import { getListAllBlog } from "../../api";
import {
  Button,
  Heading,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  ButtonGroup,
  IconButton,
  Tooltip,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const BlogContext = createContext();

export default function Blog({ listBlog }) {
  const router = useRouter();
  const token = Cookies.get("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pwd, setPwd] = useState("");
  const [creatorMode, setCreatorMode] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setCreatorMode(token ? true : false);
  }, []);

  const handleChange = (event) => {
    console.log(token);
    setPwd(event.target.value);
  };

  const handleSubmit = () => {
    console.log(pwd);
    console.log(process.env.NEXT_PUBLIC_CREATOR_PASSWORD);
    if (pwd == process.env.NEXT_PUBLIC_CREATOR_PASSWORD) {
      console.log(pwd);
      setCreatorMode(true);
      console.log("masuk sini");
      setWarning(false);
      Cookies.set("token", process.env.NEXT_PUBLIC_API_KEY);
      onClose();
    } else {
      setWarning(true);
    }
  };

  const exitCreatorMode = () => {
    setCreatorMode(false);
    Cookies.remove("token");
  };

  return (
    <>
      <ContainerPage>
        <BlogContext.Provider value={creatorMode}>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="tosca.400">
                Enter creator&#39;s password
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody color={"white"}>
                <Text
                  display={warning ? "block" : "none"}
                  mb="0.5rem"
                  fontSize="sm"
                >
                  Wrong password
                </Text>
                <Text>For sistech: password &quot;sistech&quot;</Text>
                <Input value={pwd} onChange={handleChange} />
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  bgColor="tosca.600"
                  color="white"
                  mr={3}
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Heading color="tosca.400">Stories and Adventures</Heading>
          <Flex>
            <Spacer />
            {creatorMode ? (
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  onClick={() => {
                    exitCreatorMode();
                  }}
                >
                  Exit Creator Mode
                </Button>
                <Tooltip label="Create new blog">
                  <IconButton
                    onClick={() => router.push("/blog/create/")}
                    aria-label="Add to friends"
                    icon={<AddIcon />}
                  />
                </Tooltip>
              </ButtonGroup>
            ) : (
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button onClick={onOpen}>Creator Mode</Button>
              </ButtonGroup>
            )}
          </Flex>

          {listBlog.map((blog, index) => (
            <BlogCard data={blog} key={index + 1} />
          ))}
        </BlogContext.Provider>
      </ContainerPage>
    </>
  );
}

export async function getStaticProps() {
  let listBlog;
  try {
    listBlog = await getListAllBlog();
  } catch (error) {
    console.log(error);
    listBlog = [];
  }

  return {
    props: {
      listBlog,
    },
    revalidate: 1,
  };
}

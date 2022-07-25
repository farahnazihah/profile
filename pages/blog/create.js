import { createBlog } from "../../api/";
import {
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import ContainerPage from "@components/ContainerPage";
import { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function EditBlog() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toast = useToast();
  const toastIdRef = useRef();

  function handlePostBlog() {
    toastIdRef.current = toast({ description: "Blog posted" });
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      toastIdRef.current = toast({
        description: "All fields must not be empty",
        status: "error",
      });
      return;
    }

    try {
      const res = await createBlog({ title, content });
      if (res.status == 200) {
        handlePostBlog();
        router.push("/blog/");
      } else {
        throw Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ContainerPage>
        <Heading color="tosca.600" mb="3rem">
          Write your story
        </Heading>
        <VStack spacing={"1rem"} mb="3rem">
          <Text>All fields must not be empty</Text>
          <Input
            value={title}
            placeholder="Title"
            onChange={handleTitle}
          ></Input>
          <Textarea
            value={content}
            h="30rem"
            placeholder="Write your musings here"
            onChange={handleContent}
          ></Textarea>
          <Button
            bgColor={"tosca.600"}
            w={["100%", "100%", "50%"]}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </VStack>
      </ContainerPage>
    </>
  );
}

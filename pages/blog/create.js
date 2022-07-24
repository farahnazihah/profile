import { createBlog } from "../../api/";
import {
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import ContainerPage from "@components/ContainerPage";
import { useState } from "react";

export default function EditBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const handleSubmit = () => {
    try {
      const res = createBlog({ title, content });
      console.log(res);
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

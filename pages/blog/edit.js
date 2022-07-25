import { createBlog, editBlog } from "../../api/";
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
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;
  const curTitle = Cookies.get("title");
  const curContent = Cookies.get("content");
  // Cookies.remove("title");
  // Cookies.remove("content");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toast = useToast();
  const toastIdRef = useRef();

  useEffect(() => {
    curTitle ? setTitle(curTitle) : setTitle("");
    curContent ? setContent(curContent) : setContent("");
  }, []);

  function handleSubmitEdit() {
    toastIdRef.current = toast({ description: "Blog edited" });
  }

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await editBlog({ title, content, id });
      if (res.status == 200) {
        handleSubmitEdit();
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
          Edit {title}
        </Heading>
        <VStack spacing={"1rem"} mb="3rem">
          <Input value={title} onChange={handleTitle}></Input>
          <Textarea
            value={content}
            h="30rem"
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

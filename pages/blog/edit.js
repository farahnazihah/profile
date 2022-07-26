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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toast = useToast();
  const toastIdRef = useRef();

  useEffect(() => {
    const curTitle = Cookies.get("title");
    const curContent = Cookies.get("content");
    Cookies.remove("title");
    Cookies.remove("content");

    curTitle ? setTitle(curTitle) : setTitle("");
    curContent ? setContent(curContent) : setContent("");

    const token = Cookies.get("token");
    console.log(token == undefined);
    if (token == undefined) {
      toast({
        title: `You don't have permission to edit`,
        status: "error",
        duration: "3000",
      });
      router.push("/blog");
    }
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
    const token = Cookies.get("token");
    console.log(token == undefined);
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
      toast({
        title: `You don't have permission to edit`,
        status: "error",
        duration: "3000",
      });
      router.push("/blog");
    }
  };

  return (
    <>
      <ContainerPage>
        <Heading color="tosca.400" my="2rem">
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

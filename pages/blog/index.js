import ContainerPage from "@components/ContainerPage";
import BlogCard from "@components/blog/BlogCard";
import { getListAllBlog } from "../../api";
import { Button, Heading, Link, Icon } from "@chakra-ui/react";

export default function Blog({ listBlog }) {
  return (
    <>
      <ContainerPage>
        <Heading color="tosca.600">Stories and Adventures</Heading>
        {/* <Button>Creator Mode</Button> */}
        <Button size="md" w={["100%", "50%"]} href="/blog/create">
          Creator mode
        </Button>
        <Button
          variant="outline"
          size="md"
          w={["100%", "50%"]}
          href="/blog/create"
        >
          Create new post
        </Button>
        {listBlog.map((blog, index) => (
          <BlogCard data={blog} key={index + 1} />
        ))}
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
    revalidate: 10,
  };
}

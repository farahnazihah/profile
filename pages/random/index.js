import { Heading } from "@chakra-ui/layout";
import { Button, VStack } from "@chakra-ui/react";
import ContainerPage from "/components/ContainerPage";
import NextLink from "next/link";

export default function Index() {
  return (
    <>
      <ContainerPage>
        <Heading as="h1" mx="auto" mb="3rem">
          Random pages
        </Heading>
        <VStack>
          <NextLink href="random/cat-fact" passHref>
            <Button>Facts about cats</Button>
          </NextLink>
          <NextLink href="random/anime-quote" passHref>
            <Button>Anime quote</Button>
          </NextLink>
          <Button>Movies</Button>
        </VStack>
      </ContainerPage>
    </>
  );
}

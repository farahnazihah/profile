import { Heading } from "@chakra-ui/layout";
import { Text, Button, VStack } from "@chakra-ui/react";
import ContainerPage from "/components/ContainerPage";
import NextLink from "next/link";

export default function Index({ catFact }) {
  return (
    <>
      <ContainerPage>
        <VStack>
          <Heading as="h1" mx="auto" mb="3rem">
            Fun fact about cats:
          </Heading>
          <Text align={"center"}>{catFact.fact}</Text>
          <NextLink href="/random" passHref>
            <Button>Back to Random Page</Button>
          </NextLink>
        </VStack>
      </ContainerPage>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://some-random-api.ml/animal/cat");
  const catFact = await res.json();
  return {
    props: {
      catFact,
    },
  };
}

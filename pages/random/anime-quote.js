import { Heading } from "@chakra-ui/layout";
import { Text, Button, VStack } from "@chakra-ui/react";
import ContainerPage from "/components/ContainerPage";
import NextLink from "next/link";

export default function Index({ quote }) {
  return (
    <>
      <ContainerPage>
        <VStack>
          <Heading as="h1" mx="auto" mb="3rem">
            Anime Quote
          </Heading>
          <Text fontWeight={"Bold"} fontSize={"xl"} align={"center"}>
            {quote.anime}
          </Text>
          <Text align={"center"}>&quot;{quote.quote}&quot;</Text>
          <Text align={"center"}>-{quote.character}</Text>
          <NextLink href="/random" passHref>
            <Button>Back to Random Page</Button>
          </NextLink>
        </VStack>
      </ContainerPage>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://animechan.vercel.app/api/random");
  const quote = await res.json();

  return {
    props: { quote },
  };
}

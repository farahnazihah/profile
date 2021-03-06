import {
  Box,
  VStack,
  Text,
  Circle,
  Divider,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const PositionDetails = ({
  positionTitle,
  period,
  description,
  positionDetails,
}) => {
  return (
    <Flex>
      <VStack pt="0.5rem" pr="1rem">
        <Circle bgColor="tosca.400" size="12px" />
        <Divider borderColor="gray.400" orientation="vertical" />
      </VStack>
      <Flex pb="0.5rem" direction="column">
        <Text fontWeight="bold" fontSize={["md", "l", "xl"]} color="tosca.400">
          {positionTitle}
        </Text>
        <Text fontSize={["s", "s", "md"]} color="gray.400">
          {period}
        </Text>
        <Text fontSize={["s", "s", "s"]}> {description}</Text>
        <UnorderedList fontSize={["s", "s", "s"]}>
          {positionDetails.map((value, index) => {
            return <ListItem key={index + 1}>{value}</ListItem>;
          })}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default PositionDetails;

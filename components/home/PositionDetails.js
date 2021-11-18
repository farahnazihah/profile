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
        <Divider orientation="vertical" />
      </VStack>
      <Flex pb="0.5rem" direction="column">
        <Text fontWeight="bold" fontSize={["md", "l", "xl"]} color="tosca.400">
          {positionTitle}
        </Text>
        <Text fontSize={["xs", "s", "md"]} color="gray.400">
          {period}
        </Text>
        <Text fontSize={["10px", "xs", "xs"]}> {description}</Text>
        <UnorderedList fontSize={["10px", "xs", "xs"]}>
          {positionDetails.map((value, index) => {
            return <ListItem key={index + 1}>{value}</ListItem>;
          })}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default PositionDetails;

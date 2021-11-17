import {
  Box,
  VStack,
  Text,
  Circle,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import PositionDetails from "./PositionDetails";

const Experience = ({ title, description, period, details }) => {
  return (
    <Flex maxW={["100%", "100%", "70%"]} direction="column">
      <Text fontWeight="bold" fontSize={["xl", "2xl", "2xl"]}>
        {title}
      </Text>
      <Text fontSize={["md", "lg", "xl"]} color="gray.400">
        {description}
      </Text>
      <Text fontSize={["md", "lg", "xl"]} color="gray.400">
        {period}
      </Text>
      {details.map((value, index) => {
        return (
          <PositionDetails
            key={index + 1}
            positionTitle={value.positionTitle}
            period={value.period}
            description={value.description}
            positionDetails={value.positionDetails}
          />
        );
      })}
    </Flex>
  );
};

export default Experience;

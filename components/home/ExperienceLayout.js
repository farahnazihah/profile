import {
  Box,
  VStack,
  Text,
  Circle,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Experience from "./Experience";

const ExperienceLayout = ({ heading, experience }) => {
  return (
    <Flex my={["2rem", "5rem", "5rem"]} direction={["column", "column", "row"]}>
      <Box mr={("0", "0", "5%")} mb="1rem">
        <Text
          fontWeight="bold"
          fontSize={["2xl", "3xl", "3xl"]}
          color="tosca.400"
        >
          {heading}
        </Text>
        <Divider />
      </Box>
      <Spacer />
      {experience.map((value, index) => {
        return (
          <Experience
            key={index + 1}
            title={value.title}
            description={value.description}
            period={value.period}
            details={value.details}
          />
        );
      })}
    </Flex>
  );
};

export default ExperienceLayout;

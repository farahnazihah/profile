import {
  Box,
  VStack,
  Text,
  Circle,
  Divider,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";

const Project = () => {
  return (
    <>
      <Box>
        <Image
          htmlWidth="400px"
          htmlHeight="auto"
          src="sabilamall.jpg"
          alt="Sabila Mall"
          mr={["1rem", "1rem", "2rem"]}
        />
      </Box>
    </>
  );
};

export default Project;

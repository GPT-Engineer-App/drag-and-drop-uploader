// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [file, setFile] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  if (!isLoggedIn) {
    return (
      <Container centerContent>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4} as="form" onSubmit={handleLogin}>
            <Heading>Login</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" placeholder="Enter your username" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Enter your password" />
            </FormControl>
            <Button rightIcon={<FaSignInAlt />} colorScheme="blue" type="submit">
              Login
            </Button>
            <Text>
              Don't have an account?{" "}
              <Link color="teal.500" href="#">
                Sign up
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container centerContent>
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
        <VStack spacing={4}>
          <Heading>File Upload</Heading>
          <Text>Drag and drop your file here or click to upload</Text>
          <Flex w="full" h="200px" borderWidth="2px" borderStyle="dashed" borderRadius="md" alignItems="center" justifyContent="center" onDragOver={handleDragOver} onDrop={handleDrop}>
            {file ? <Text>{file.name}</Text> : <FaCloudUploadAlt size="24px" />}
          </Flex>
          <Input type="file" onChange={handleFileChange} p={1} accept="image/*,application/pdf" />
          <Button colorScheme="green" isDisabled={!file}>
            Upload
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;

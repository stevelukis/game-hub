import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size="md">Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page doesn't exist"
            : "Something unexpected happened"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;

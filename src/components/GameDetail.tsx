import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Heading, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/" />;
  }

  const { data } = useGame(slug);
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetail;

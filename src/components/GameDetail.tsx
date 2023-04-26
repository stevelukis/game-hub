import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const GameDetail = () => {
  const { id } = useParams();
  return <Text>GameDetailPage</Text>;
};

export default GameDetail;

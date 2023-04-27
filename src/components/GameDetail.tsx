import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const description = game?.description_raw || "";

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{description}</ExpandableText>
    </>
  );
};

export default GameDetail;

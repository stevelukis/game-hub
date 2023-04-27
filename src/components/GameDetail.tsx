import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

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
      <GameAttributes game={game} />
      <Box marginTop={5}>
        <GameTrailer slug={game.slug} />
      </Box>
      <Box marginTop={5}>
        <GameScreenshots slug={game.slug} />
      </Box>
    </>
  );
};

export default GameDetail;

import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
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
    <Grid
      templateAreas={{
        base: `"main" "media"`,
        lg: `"main media"`,
      }}
      gap={{
        base: 5,
        lg: 0,
      }}
      padding={5}
    >
      <GridItem area="main">
        <Heading>{game?.name}</Heading>
        <ExpandableText>{description}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem area="media">
        <GameTrailer slug={game.slug} />
        <Box marginTop={5}>
          <GameScreenshots slug={game.slug} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default GameDetail;

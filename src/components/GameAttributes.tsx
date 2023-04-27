import React from "react";
import DefinitionItem from "./DefinitionItem";
import { List, ListItem, SimpleGrid } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid marginTop={5} columns={2} spacing={5} as="dl">
      <DefinitionItem term="Platforms">
        <List>
          {game.parent_platforms.map(({ platform }) => (
            <ListItem key={platform.id}>{platform.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <List>
          {game.genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <List>
          {game.publishers.map(({ id, name }) => (
            <ListItem key={id}>{name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;

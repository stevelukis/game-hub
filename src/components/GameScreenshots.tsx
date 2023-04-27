import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;

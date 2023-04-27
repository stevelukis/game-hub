import React from "react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: trailers } = useGameTrailer(slug);

  if (!trailers) return null;

  return <video src={trailers.results[0].data["480"]} controls={true} />;
};

export default GameTrailer;

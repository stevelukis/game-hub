import React from "react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: trailers } = useTrailer(slug);

  if (!trailers) return null;

  return <video src={trailers.results[0].data["480"]} controls={true} />;
};

export default GameTrailer;

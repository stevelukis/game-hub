import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: trailers } = useTrailers(slug);

  if (!trailers) return null;

  return <video src={trailers.results[0].data["480"]} controls={true} />;
};

export default GameTrailer;

import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (children.length < 300) return <Text>{children}</Text>;

  const textDisplay = expanded ? children : `${children.substring(0, 300)}...`;
  const buttonText = expanded ? "Show less" : "Show more";

  return (
    <Text>
      {textDisplay}
      <Button
        colorScheme="yellow"
        size="xs"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {buttonText}
      </Button>
    </Text>
  );
}

export default ExpandableText;

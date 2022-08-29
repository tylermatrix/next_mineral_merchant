import React from "react";

import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { gameoverAtom } from "../state/GlobalState";
import Travel from "./Travel";

function HighScores() {
  return (
    <Flex
      minW="387px"
      height="544px"
      direction="column"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
      borderRadius="15px"
    >
      High Scores
    </Flex>
  );
}

export default HighScores;

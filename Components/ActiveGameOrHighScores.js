import React from "react";
import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { gameoverAtom } from "../state/GlobalState";
import Travel from "./Travel";
import HighScores from "./HighScores";

function ActiveGameOrHighScores() {
  const [gameover, setGameover] = useAtom(gameoverAtom);
  return <Flex>{gameover ? <HighScores /> : <Travel />}</Flex>;
}

export default ActiveGameOrHighScores;

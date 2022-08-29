import React from "react";

import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { gameoverAtom, highscoresAtom } from "../state/GlobalState";
import { atomWithStorage } from "jotai/utils";
import HighscoreItem from "./HighscoreItem";
import Travel from "./Travel";

function HighScores() {
  //   const highscores = ["1000000", "500000", "100000"];
  //   localStorage.setItem("highscores", JSON.stringify(highscores));
  //   const storedHighscores = JSON.parse(localStorage.getItem("highscores"));
  //   console.log(storedHighscores);

  const [storedHighscores, setStoredHighscores] = useAtom(highscoresAtom);
  console.log(`storedHighscores: ${storedHighscores}`);
  const copyStoredHighscores = [...storedHighscores];
  const sortedHighscores = copyStoredHighscores
    .sort(function (a, b) {
      return b - a;
    })
    .slice(0, 4);

  console.log(`sortedHighscores: ${sortedHighscores}`);

  return (
    <Flex
      minW="387px"
      height="544px"
      direction="column"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
      borderRadius="15px"
    >
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        fontSize="25px"
        lineHeight="38px"
        color="#C1C1C1"
        margin="25px"
        width="100%"
        as={motion.div}
        whileHover={{ color: "#fff" }}
      >
        High Scores
      </Text>

      <Flex flexDirection="column">
        {sortedHighscores.map((highscore, index) => (
          <HighscoreItem key={index} highscore={highscore} value={index} />
        ))}
      </Flex>
    </Flex>
  );
}

export default HighScores;

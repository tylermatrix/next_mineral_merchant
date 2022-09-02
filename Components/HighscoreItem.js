import React from "react";

import { motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";

function HighscoreItem({ highscore, value }) {
  return (
    <Flex>
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        fontSize="20px"
        lineHeight="38px"
        color="#C1C1C1"
        margin="25px"
        width="100%"
        as={motion.div}
        whileHover={{ color: "#fff" }}
      >
        {`Score ${value + 1}: ${highscore}`}
      </Text>
    </Flex>
  );
}

export default HighscoreItem;

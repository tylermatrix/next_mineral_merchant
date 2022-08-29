import { Flex, Text } from "@chakra-ui/react";
import TravelButton from "./TravelButton";
import { atom, useAtom } from "jotai";
import { planetAtom, gameoverAtom } from "../state/GlobalState";
import { motion } from "framer-motion";
export default function Travel() {
  const [planets, setPlanets] = useAtom(planetAtom);
  const [gameover, setGameover] = useAtom(gameoverAtom);
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
        as={motion.div}
        whileHover={{ color: "#fff" }}
      >
        Travel
      </Text>
      <Flex
        className="planets-section"
        gap="20px"
        direction="column"
        opacity={gameover ? 0 : 1}
      >
        <div className="row">
          <TravelButton planetName={planets[0].name}></TravelButton>
          <TravelButton planetName={planets[1].name}></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName={planets[2].name}></TravelButton>
          <TravelButton planetName={planets[3].name}></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName={planets[4].name}></TravelButton>
          <TravelButton planetName={planets[5].name}></TravelButton>
        </div>
      </Flex>
    </Flex>
  );
}

import React from "react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  selectedPlanetAtom,
  dayAtom,
  mineralAtom,
  gameoverAtom,
  highscoresAtom,
  playerAtom,
  showNewsAtom,
} from "../state/GlobalState";
import { motion } from "framer-motion";

function TravelButton({ planetName = "planet" }) {
  const [selectedPlanet, setSelectedPlanet] = useAtom(selectedPlanetAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);
  const [day, setDay] = useAtom(dayAtom);
  const [gameover, setGameover] = useAtom(gameoverAtom);
  const [highscores, setHighscores] = useAtom(highscoresAtom);
  const [player, setPlayer] = useAtom(playerAtom);
  const [showNews, setShowNews] = useAtom(showNewsAtom);
  const handleClick = () => {
    setShowNews(false);
    if (day == 30) {
      setGameover(true);
      setHighscores([...highscores, player.cash]);
    } else if (selectedPlanet === planetName) {
      return;
    } else {
      setSelectedPlanet(planetName);
      setDay(day + 1);

      const newMineral = mineral.map((item) => {
        if (item.changedPrice) {
          item.lastChangedPrice = item.changedPrice;
        }
        return {
          ...item,
          changedPrice: Math.floor(
            item.startingPrice * (Math.random() * 0.6 + 0.7)
          ),
        };
      });
      const copyPlayer = player;
      const newDebt = Math.round(player.debt * 1.15);
      copyPlayer = { ...player, debt: newDebt };
      setPlayer(copyPlayer);
      setMineral(newMineral);
    }
  };

  return (
    <Flex direction="column" gap="8.6px">
      <Flex
        height="100px"
        width="100px"
        background={
          planetName == selectedPlanet
            ? "linear-gradient(293.71deg, #00FCE2 32.27%, rgba(255, 255, 255, 0.87) 87.87%)"
            : "linear-gradient(293.71deg, #F72C2C 21.26%, rgba(255, 255, 255, 0.87) 87.87%)"
        }
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          handleClick();
        }}
        as={motion.div}
        whileTap={{ scale: 0.9 }}
        whileHover={{
          transition: { duration: 0.8 },
          scale: 0.99,
        }}
        cursor="pointer"
        boxShadow=" -4px -4px 8px #646282, 6px 5px 15px #0A091A"
        borderRadius="84.4988px"
        disable={gameover}
      >
        <Flex
          height="80px"
          width="80px"
          borderRadius="50%"
          background={
            planetName != selectedPlanet
              ? "radial-gradient(57.8% 57.8% at 23.03% 28.53%, #646282 13.33%, #0A091A 90.25%)"
              : "#353448"
          }
          boxShadow={
            planetName == selectedPlanet
              ? "4px 4px 4px rgba(0, 0, 0, 0.25), inset 11px 8px 16px rgba(10, 9, 26, 0.86), inset -5px -5px 15px #646282"
              : "0px"
          }
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="#c1c1c1"
            as={motion.div}
            whileHover={{
              transition: { duration: 0.2 },
              color: "#FFF",
            }}
          >
            {planetName == selectedPlanet ? "Current" : "Visit"}
          </Text>
        </Flex>
      </Flex>
      <Text color="white" textAlign="center">
        {planetName}
      </Text>
    </Flex>
  );
}

export default TravelButton;

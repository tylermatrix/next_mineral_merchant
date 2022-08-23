import React from "react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { selectedPlanetAtom, dayAtom, mineralAtom } from "../state/GlobalState";
import { motion } from "framer-motion";

function TravelButton({ planetName = "planet" }) {
  const [selectedPlanet, setSelectedPlanet] = useAtom(selectedPlanetAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);
  const [day, setDay] = useAtom(dayAtom);
  const handleClick = () => {
    setSelectedPlanet(planetName);
    setDay(day + 1);
    mineral.forEach((min) => {
      min.price = Math.floor(min.price * (1.3 - 0.1) * Math.random() + 1);
      setMineral([...mineral], min);
    });
  };

  return (
    <Flex direction="column" gap="8.6px">
      <Flex
        height="100px"
        width="100px"
        background={
          planetName == selectedPlanet
            ? "linear-gradient(293.71deg, #00FCE2 32.27%, rgba(255, 255, 255, 0.87) 87.87%)"
            : "linear-gradient(293.71deg, #A72C2C 21.26%, rgba(255, 255, 255, 0.87) 87.87%)"
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
      >
        <Flex
          height="80px"
          width="80px"
          borderRadius="50%"
          background="#353448"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset 11px 8px 16px rgba(10, 9, 26, 0.86), inset -5px -5px 15px #646282"
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

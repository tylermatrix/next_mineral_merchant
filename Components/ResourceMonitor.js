import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { dayAtom, playerAtom, selectedPlanetAtom } from "../state/GlobalState";
import ResourceItem from "./ResourceItem";
export default function ResourceMonitor() {
  const [day, setDay] = useAtom(dayAtom);
  const [player, setPlayer] = useAtom(playerAtom);
  const [selectedPlanet, setSelectedPlanet] = useAtom(selectedPlanetAtom);

  return (
    <>
      <Flex
        minW="387px"
        height="481px"
        direction="column"
        bg="#353448"
        boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
        borderRadius="15px"
      >
        <Flex>
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
            Resource Monitor
          </Text>
        </Flex>
        <ResourceItem resource="PLANET">{selectedPlanet}</ResourceItem>
        <ResourceItem resource="CASH">{player.cash}</ResourceItem>
        <ResourceItem resource="DEBT">{player.debt}</ResourceItem>
        <ResourceItem resource="DAYS">{day}</ResourceItem>
      </Flex>
    </>
  );
}

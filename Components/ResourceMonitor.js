import { Flex, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import {
  dayAtom,
  playerAtom,
  selectedPlanetAtom,
  mineralAtom,
  gameoverAtom,
} from "../state/GlobalState";
import ResourceItem from "./ResourceItem";
export default function ResourceMonitor() {
  const [day, setDay] = useAtom(dayAtom);
  const [player, setPlayer] = useAtom(playerAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);
  const [selectedPlanet, setSelectedPlanet] = useAtom(selectedPlanetAtom);
  const [gameover, setGameover] = useAtom(gameoverAtom);
  const resetDay = () => {
    setDay(0);
    setPlayer({ ...player, cash: 2000, debt: 2001 });
    const copyMineral = [...mineral];
    copyMineral.forEach((m) => {
      m.amountOwned = 0;
    }),
      setMineral(copyMineral);
    setGameover(false);
  };

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
            margin="15px"
            as={motion.div}
            whileHover={{ color: "#fff" }}
          >
            Resource Monitor
          </Text>

          <Button
            width="70%"
            height="65px"
            color="white"
            background="#37364C"
            boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
            borderRadius="20px"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="25px"
            marginRight="30px"
            alignSelf="center"
            as={motion.div}
            whileHover={{ scale: 0.99 }}
            cursor="pointer"
            onClick={() => {
              resetDay();
            }}
          >
            {" "}
            Reset Game
          </Button>
        </Flex>
        <ResourceItem resource="PLANET">{selectedPlanet}</ResourceItem>
        <ResourceItem resource="CASH">{player.cash}</ResourceItem>
        <ResourceItem resource="DEBT">{player.debt}</ResourceItem>
        <ResourceItem resource="DAYS">{day}</ResourceItem>
      </Flex>
    </>
  );
}

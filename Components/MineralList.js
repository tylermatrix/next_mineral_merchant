import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { useAtom } from "jotai";
import {
  mineralAtom,
  selectedMineralAtom,
  mineralPickedAtom,
  mineralToBuyOrSellAtom,
} from "../state/GlobalState";

import { motion } from "framer-motion";
function MineralList() {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [minerals, setMinerals] = useAtom(mineralAtom);
  const [mineralSelected, setSelectedMineral] = useAtom(selectedMineralAtom);
  const [mineralToBuyOrSell, setMineralToBuyOrSell] = useAtom(
    mineralToBuyOrSellAtom
  );
  const handleClick = (mineral) => {
    setMineralPicked(mineral.name);
    setMineralToBuyOrSell(mineral);
    setSelectedMineral(true);
  };
  return (
    <>
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        fontSize="25px"
        lineHeight="38px"
        color="#C1C1C1"
        margin="25px"
        width="100%"
      >
        Mineral
      </Text>
      {minerals.map((mineralFromArray, index) => (
        <Flex
          backgroundColor="rgb(255, 255, 255, 0.1)"
          key={mineralFromArray.id}
          marginBottom="15px"
          as={motion.div}
          whileHover={{ scale: 0.99 }}
          cursor="pointer"
          justifyContent="space-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
          onClick={() => {
            handleClick(mineralFromArray);
          }}
        >
          <Flex marginLeft="20px" width="160px">
            <Image
              src={mineralFromArray.image}
              alt="mineral image"
              height="38px"
              width="38px"
            />
            <Text
              fontSize="22.61px"
              color="#C1C1C1"
              marginLeft="30px"
              as={motion.div}
              whileHover={{ color: "#FFF" }}
            >
              {mineralFromArray.name}
            </Text>
          </Flex>
          <Text color="white">{mineralFromArray.amountOwned}</Text>
          <Text color="white">{mineralFromArray.price}</Text>
        </Flex>
      ))}
      {/*
       */}
    </>
  );
}

export default MineralList;

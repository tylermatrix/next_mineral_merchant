import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { useAtom } from "jotai";
import {
  mineralAtom,
  selectedMineralAtom,
  mineralPickedAtom,
  mineralToBuyOrSellAtom,
  mineralIDAtom,
} from "../state/GlobalState";

import { motion } from "framer-motion";
function MineralList() {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [minerals, setMinerals] = useAtom(mineralAtom);
  const [mineralSelected, setSelectedMineral] = useAtom(selectedMineralAtom);
  const [mineralToBuyOrSell, setMineralToBuyOrSell] = useAtom(
    mineralToBuyOrSellAtom
  );
  const [mineralID, setMineralID] = useAtom(mineralIDAtom);

  const handleClick = (id) => {
    setMineralPicked(true);
    setSelectedMineral(true);
    setMineralID(id);
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
        as={motion.div}
        whileHover={{ scale: 0.99, color: "#fff" }}
      >
        Mineral
      </Text>
      {minerals.map((min, index) => (
        <Flex
          width="90%"
          height="65px"
          background="#37364C"
          boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
          borderRadius="20px"
          justifyContent="space-evenly"
          alignItems="center"
          marginTop="25px"
          alignSelf="center"
          as={motion.div}
          whileHover={{ scale: 0.99 }}
          cursor="pointer"
          backgroundColor="rgb(255, 255, 255, 0.1)"
          key={min.id}
          marginBottom="15px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
          onClick={() => {
            handleClick(min.id);
          }}
        >
          <Flex marginLeft="20px" width="160px">
            <Image
              src={min.image}
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
              {min.name}
            </Text>
          </Flex>
          <Text color="white">{min.amountOwned}</Text>
          <Text color="white" marginRight="10px">
            {min.changedPrice ? min.changedPrice : min.startingPrice}
          </Text>
        </Flex>
      ))}
      {/*
       */}
    </>
  );
}

export default MineralList;

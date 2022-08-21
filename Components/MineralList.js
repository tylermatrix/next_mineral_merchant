import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import { useAtom } from "jotai";
import { mineralAtom } from "../state/GlobalState";

import { motion } from "framer-motion";
function MineralList() {
  const [minerals, setMinerals] = useAtom(mineralAtom);
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
      >
        Mineral
      </Text>
      {minerals.map((mineral) => (
        <Flex
          backgroundColor="rgb(255, 255, 255, 0.1)"
          key={mineral.id}
          marginBottom="15px"
          as={motion.div}
          whileHover={{ scale: 0.99 }}
          cursor="pointer"
        >
          <Flex marginLeft="20px">
            <Image
              src={mineral.image}
              alt="mineral image"
              height="38px"
              width="38px"
            />
            <Text
              fontSize="22.61px"
              color="#C1C1C1"
              marginLeft="30px"
              as={motion.div}
              whileHover={{ color: "white" }}
            >
              {mineral.name}
            </Text>
          </Flex>
        </Flex>
      ))}
      {/*
       */}
    </>
  );
}

export default MineralList;

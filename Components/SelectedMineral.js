import React from "react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  mineralSelectedAtom,
  mineralPickedAtom,
} from "../state/GlobalState";
import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
function SelectedMineral(mineral) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  console.log(mineralPicked);
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
        {mineralPicked}
      </Text>

      <button
        onClick={() => {
          setMineralPicked("");
        }}
      >
        list
      </button>
    </>
  );
}

export default SelectedMineral;

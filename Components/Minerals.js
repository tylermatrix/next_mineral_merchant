import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import SelectedMineral from "./SelectedMineral";
import MineralList from "./MineralList";
import { useAtom } from "jotai";
import { selectedMineralAtom, mineralPickedAtom } from "../state/GlobalState";

export default function Minerals() {
  const [mineralSelected, setSelectedMineral] = useState(selectedMineralAtom);
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  return (
    <>
      {mineralPicked !== "" ? (
        <Flex
          minW="387px"
          height="544px"
          direction="column"
          bg="#353448"
          boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
          borderRadius="20px"
          transition="ease-in"
        >
          <SelectedMineral transition="ease-in"></SelectedMineral>
        </Flex>
      ) : (
        <Flex
          minW="387px"
          height="544px"
          direction="column"
          bg="#353448"
          boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
          borderRadius="15px"
        >
          <MineralList transition="ease-in"></MineralList>
        </Flex>
      )}
    </>
  );
}

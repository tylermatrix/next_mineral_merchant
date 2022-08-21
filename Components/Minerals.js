import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import SelectedMineral from "./SelectedMineral";
import MineralList from "./MineralList";
export default function Minerals() {
  const [mineralSelected, setMineralSelected] = useState(false);

  return (
    <>
      {mineralSelected ? (
        <Flex
          minW="387px"
          height="544px"
          direction="column"
          bg="#353448"
          borderRadius="15px"
        >
          <SelectedMineral></SelectedMineral>
        </Flex>
      ) : (
        <Flex
          minW="387px"
          height="544px"
          direction="column"
          bg="#353448"
          borderRadius="15px"
        >
          <MineralList></MineralList>
        </Flex>
      )}
    </>
  );
}

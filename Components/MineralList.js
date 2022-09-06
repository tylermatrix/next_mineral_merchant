import React from "react";
import { Flex, Text, Image, Box, Icon } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  selectedMineralAtom,
  mineralPickedAtom,
  mineralToBuyOrSellAtom,
  mineralIDAtom,
} from "../state/GlobalState";
import { GiShoppingCart } from "react-icons/gi";
import { motion } from "framer-motion";
function MineralList() {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [minerals, setMinerals] = useAtom(mineralAtom);
  const [mineralSelected, setSelectedMineral] = useAtom(selectedMineralAtom);
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
        marginTop="25px"
        marginLeft="20px"
        width="100%"
        as={motion.div}
        whileHover={{ color: "#fff" }}
      >
        Mineral
      </Text>

      {/* <Flex
        width="348.3px"
        justifyContent="center"
        margin="auto"
        bg="blue"
        padding="10px"
      >
        <Flex gap={10}>
          <Box height="38px" width="38px"></Box>
          <Text minW="120px">Name</Text>
          <Text>Hodl</Text>
          <Text marginRight="10px">Price</Text>
        </Flex>
      </Flex> */}

      <Flex width="90%" height="65px" alignItems="center" alignSelf="center">
        <Flex alignItems="center" gap={9} padding="5px">
          <Box height="38px" width="38px" />
          <Text fontWeight="600" fontSize="18px" color="white" minW="120px">
            Name
          </Text>
          <Flex minW="30px" justifyContent="left">
            <Icon as={GiShoppingCart} color="green" w={7} h={7}></Icon>
          </Flex>
          <Text fontWeight="600" fontSize="18px" color="white">
            Price
          </Text>
        </Flex>
      </Flex>
      {minerals.map((min, index) => (
        <Flex
          width="90%"
          height="65px"
          background="#37364C"
          boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
          borderRadius="20px"
          alignItems="center"
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
          <Flex alignItems="center" gap={9}>
            <Image
              src={min.image}
              alt="mineral image"
              height="38px"
              borderRadius="10px"
              width="38px"
              paddingLeft="10px"
            />
            <Text
              fontSize="22.61px"
              color="#C1C1C1"
              minW="120px"
              as={motion.div}
              whileHover={{ color: "#FFF" }}
            >
              {min.name}
            </Text>

            <Text color="white" minW="30px">
              {min.amountOwned}
            </Text>
            <Text color="white">
              {min.changedPrice ? min.changedPrice : min.startingPrice}
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

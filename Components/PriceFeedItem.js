import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { motion } from "framer-motion";
function PriceFeedItem({ mineralName, mineralChange }) {
  return (
    <Flex>
      <Flex
        minWidth="227px"
        justifyContent="space-evenly"
        alignItems="center"
        width="90%"
        background="#37364C"
        boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
        borderRadius="20px"
        backgroundColor="rgb(255, 255, 255, 0.1)"
        marginBottom="15px"
      >
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="600"
          fontSize="15px"
          color="#C1C1C1"
          minW="100px"
        >
          {mineralName}
        </Text>
        <Flex minW="50px" justifyContent="left">
          <Icon
            as={mineralChange > 0 ? VscTriangleUp : VscTriangleDown}
            color={mineralChange > 0 ? "green" : "red"}
            minH="10px"
            alignSelf="center"
          ></Icon>
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize="15px"
            alignSelf="center"
            color={mineralChange > 0 ? "green" : "red"}
          >
            {mineralChange}%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PriceFeedItem;

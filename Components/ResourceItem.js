import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
function ResourceItem({ resource, children }) {
  return (
    <>
      <Flex
        width="90%"
        height="65px"
        background="#37364C"
        boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
        borderRadius="20px"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop="25px"
        padding="20px"
        alignSelf="center"
        as={motion.div}
        whileHover={{ scale: 0.99 }}
        cursor="pointer"
      >
        <Text
          fontSize="25px"
          fontWeight="600"
          lineHeight="37.5px"
          width="165px"
          height="38px"
          color="#C1C1C1"
          alignSelf="center"
          as={motion.div}
          whileHover={{ color: "#FFFFFF" }}
        >
          {resource}
        </Text>

        <Flex
          width="60%"
          height="46px"
          alignItems="center"
          justifyContent="center"
          background="#53526B"
          boxShadow="-3px -3px 9px #646282, inset 4px 4px 18px #0A091A"
          borderRadius="20px"
        >
          <Text textAlign="" color="#C1C1C1">
            {children}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default ResourceItem;

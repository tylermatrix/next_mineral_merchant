import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ResourceItem from "./ResourceItem";
export default function ResourceMonitor() {
  return (
    <>
      <Flex
        minW="387px"
        height="481px"
        direction="column"
        bg="#353448"
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
            margin="25px"
          >
            Resource Monitor
          </Text>
        </Flex>
        <ResourceItem resource="PLANET"></ResourceItem>
        <ResourceItem resource="CASH"></ResourceItem>
        <ResourceItem resource="DEBT"></ResourceItem>
        <ResourceItem resource="DAYS"></ResourceItem>
      </Flex>
    </>
  );
}

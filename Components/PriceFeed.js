import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { dayAtom } from "../state/GlobalState";
import { useAtom } from "jotai";
import ResourceItem from "./ResourceItem";
export default function PriceFeed() {
  const [day, setDay] = useAtom(dayAtom);
  return (
    <Flex
      height="224px"
      minW="786"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
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
          as={motion.div}
          whileHover={{ color: "#fff" }}
        >
          Price Feed
        </Text>
      </Flex>
    </Flex>
  );
}

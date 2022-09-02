import { Flex, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { dayAtom } from "../state/GlobalState";
import { useAtom } from "jotai";
import { mineralAtom } from "../state/GlobalState";
import PriceFeedItem from "./PriceFeedItem";
import ResourceItem from "./ResourceItem";
export default function PriceFeed() {
  const [day, setDay] = useAtom(dayAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);

  const jadeenic = mineral.find((m) => m.name === "Jadeenic");
  const elsmuth = mineral.find((m) => m.name === "Elsmmuth");
  const motuesia = mineral.find((m) => m.name === "Motuesia");
  const lizac = mineral.find((m) => m.name === "Lizac");
  const dalusine = mineral.find((m) => m.name === "Dalusine");
  const mendraz = mineral.find((m) => m.name === "Mendraz");
  // calculate percentage change from jadeenic.changedPrice to jadeenic.lastChangePrice and round to nearest whole number
  const percentageChangeHandler = (mineral) => {
    if (day == 0) {
      return "N/A";
    } else if (day == 1) {
      return Math.round(
        ((mineral.startingPrice - mineral.changedPrice) /
          mineral.changedPrice) *
          100
      );
    } else {
      return Math.round(
        ((mineral.changedPrice - mineral.lastChangedPrice) /
          mineral.lastChangedPrice) *
          100
      );
    }
  };
  const jadeenicPercentageChange = percentageChangeHandler(jadeenic);
  const elsmuthPercentageChange = percentageChangeHandler(elsmuth);
  const motuesiaPercentageChange = percentageChangeHandler(motuesia);
  const lizacPercentageChange = percentageChangeHandler(lizac);
  const dalusinePercentageChange = percentageChangeHandler(dalusine);
  const mendrazPercentageChange = percentageChangeHandler(mendraz);

  return (
    <Flex
      height="224px"
      minW="786"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
      borderRadius="15px"
      p="20px"
      flexDirection="column"
    >
      <Flex maxHeight="50px" justifyContent="space-between" alignItems="center">
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="600"
          fontSize="25px"
          color="#C1C1C1"
          as={motion.div}
          whileHover={{ color: "#fff" }}
        >
          Price Feed
        </Text>
        <Flex width="60%" justifyContent="right">
          <ResourceItem resource="day">{day}</ResourceItem>
        </Flex>
      </Flex>
      <Flex marginTop="60px" gap="10px" justifyContent="right">
        <PriceFeedItem
          mineralName="Lizac"
          mineralChange={lizacPercentageChange}
        ></PriceFeedItem>
        <PriceFeedItem
          mineralName="Elsmmuth"
          mineralChange={elsmuthPercentageChange}
        ></PriceFeedItem>
        <PriceFeedItem
          mineralName="Motuesia"
          mineralChange={motuesiaPercentageChange}
        ></PriceFeedItem>
      </Flex>
      <Flex marginTop="20px" gap="10px" justifyContent="right">
        <PriceFeedItem
          mineralName="Dalusine"
          mineralChange={dalusinePercentageChange}
        ></PriceFeedItem>
        <PriceFeedItem
          mineralName="Jadeenic"
          mineralChange={jadeenicPercentageChange}
        ></PriceFeedItem>
        <PriceFeedItem
          mineralName="Mendraz"
          mineralChange={mendrazPercentageChange}
        ></PriceFeedItem>
      </Flex>
    </Flex>
  );
}

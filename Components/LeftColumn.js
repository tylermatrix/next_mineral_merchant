import { Flex, Text } from "@chakra-ui/react";
import Minerals from "./Minerals";
import Travel from "./Travel";
import PriceFeed from "./PriceFeed";
import ActiveGameOrHighScores from "./ActiveGameOrHighScores";
export default function LeftColumn() {
  return (
    <Flex direction="column" gap="11px">
      <Flex gap="11px">
        <Minerals />
        <ActiveGameOrHighScores></ActiveGameOrHighScores>
      </Flex>
      <PriceFeed />
    </Flex>
  );
}

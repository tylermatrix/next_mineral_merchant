import React from "react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  mineralSelectedAtom,
  mineralPickedAtom,
  mineralToBuyOrSellAtom,
  playerAtom,
} from "../state/GlobalState";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { GiMineralPearls } from "react-icons/gi";
function SelectedMineral({ mineral }) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [sliderValue, setSliderValue] = useState(50);
  const [player, setPlayer] = useAtom(playerAtom);
  const [mineralToBuyOrSell, setMineralToBuyOrSell] = useAtom(
    mineralToBuyOrSellAtom
  );

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <>
      <Flex direction="column">
        <Flex justifyContent="space-between">
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize="25px"
            lineHeight="38px"
            color="#C1C1C1"
            margin="25px"
          >
            {mineralToBuyOrSell.name}
          </Text>

          <Text
            display="flex"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize="24px"
            lineHeight="36px"
            color="#C1C1C1"
            margin="25px"
            backgroundColor="#37364C"
            borderRadius="20px"
            width="91.06px"
            height="39.3px"
            boxShadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            as={motion.div}
            whileHover={{ scale: 0.99 }}
            onClick={() => {
              setMineralPicked("");
            }}
          >
            List
          </Text>
        </Flex>

        <Flex justifyContent="center">
          <CircularProgress
            value={sliderValue}
            colorScheme="#c1c1c1"
            size="
            210.46px"
          >
            <CircularProgressLabel color="white">
              {sliderValue}
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex direction="row" marginTop="50px" width="80%" alignSelf="center">
          <Slider
            aria-label="slider-ex-6"
            color="#00FCE2"
            colorScheme="teal"
            max={
              //round function down to round the number to the nearest whole number
              // round function down to round the number to the nearest whole number
              Math.floor(
                player.cash / mineralToBuyOrSell.price > 100
                  ? 100
                  : player.cash / mineralToBuyOrSell.price
              )
            }
            onChange={(val) => setSliderValue(val)}
          >
            <SliderMark
              value={Math.floor(
                player.cash / mineralToBuyOrSell.price > 100
                  ? 50
                  : player.cash / mineralToBuyOrSell.price / 2
              )}
              {...labelStyles}
            >
              {Math.floor(
                player.cash / mineralToBuyOrSell.price > 100
                  ? 50
                  : player.cash / mineralToBuyOrSell.price / 2
              )}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>

            <SliderThumb boxSize={8}>
              <Box color="teal" as={GiMineralPearls} />
            </SliderThumb>
          </Slider>
        </Flex>

        <Flex marginTop="40px" direction="column">
          <Text>Current Amount: {mineralToBuyOrSell.amountOwned}</Text>
          <Text>Current Price: {mineralToBuyOrSell.price}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default SelectedMineral;

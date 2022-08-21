import React from "react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  mineralSelectedAtom,
  mineralPickedAtom,
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

function SelectedMineral(mineral) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [sliderValue, setSliderValue] = useState(50);

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
            {mineralPicked}
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
            box-shadow="4px 4px 18px #0A091A, -3px -3px 9px #646282"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              setMineralPicked("");
            }}
          >
            List
          </Text>
        </Flex>
        <Flex direction="row" marginTop="150px" width="80%" alignSelf="center">
          <Slider
            aria-label="slider-ex-6"
            color="#00FCE2"
            colorScheme="teal"
            onChange={(val) => setSliderValue(val)}
          >
            <SliderMark value={25} {...labelStyles}>
              25
            </SliderMark>
            <SliderMark value={50} {...labelStyles}>
              50
            </SliderMark>
            <SliderMark value={75} {...labelStyles}>
              75
            </SliderMark>
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="#00FCE2"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {sliderValue}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    </>
  );
}

export default SelectedMineral;

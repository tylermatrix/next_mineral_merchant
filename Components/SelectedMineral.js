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
import { Switch, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
function SelectedMineral({ mineral: mineralFromArray }) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [sliderValue, setSliderValue] = useState(50);
  const [player, setPlayer] = useAtom(playerAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);
  const [mineralToBuyOrSell, setMineralToBuyOrSell] = useAtom(
    mineralToBuyOrSellAtom
  );
  const [isBuying, setIsBuying] = useState(false);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const handleChange = (e) => {
    setIsBuying((isBuying = !isBuying));
    console.log(isBuying);
  };
  const handleBuyOrSell = () => {
    // create function to buy or sell mineral based on buy or sell state and mineral selected and player money and mineral price and mineral quantity from slider value
    if (isBuying) {
      if (player.cash >= mineralToBuyOrSell.price * sliderValue) {
        setPlayer({
          ...player,
          cash: player.cash - mineralToBuyOrSell.price * sliderValue,
        });
        setMineralToBuyOrSell({
          ...mineralToBuyOrSell,
          amountOwned: mineralToBuyOrSell.amountOwned + sliderValue,
        });
        setMineral({
          ...setMineralToBuyOrSell,
        });
      }
    }
    if (!isBuying && mineralToBuyOrSell.amountOwned >= sliderValue) {
      setPlayer({
        ...player,
        cash: player.cash + mineralToBuyOrSell.price * sliderValue,
      });
      if (mineralToBuyOrSell.amountOwned >= sliderValue) {
        setMineralToBuyOrSell({
          ...mineralToBuyOrSell,
          amountOwned: mineralToBuyOrSell.amountOwned - sliderValue,
        });
        setMineral({
          ...setMineralToBuyOrSell,
        });
      }
    }
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
            {mineralToBuyOrSell.name} @ ${mineralToBuyOrSell.price}
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
            color={isBuying ? "teal" : "red"}
            size="210.46px"
          >
            <CircularProgressLabel color="white">
              {sliderValue}
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Flex justifyContent="center" marginTop="20px">
          <Stack direction="row">
            <Switch
              colorScheme={isBuying ? "teal" : "red"}
              size="lg"
              id="switch"
              onChange={() => {
                handleChange();
              }}
            />
          </Stack>
          <Button
            colorScheme={isBuying ? "teal" : "red"}
            size="md"
            onClick={() => {
              handleBuyOrSell();
            }}
          >
            {isBuying ? "Buy" : "Sell"}
          </Button>
        </Flex>

        <Flex
          direction="column"
          marginTop="50px"
          width="80%"
          alignSelf="center"
        >
          <Text color="red">
            {!isBuying && mineralToBuyOrSell.amountOwned < 1
              ? "You have nothing to sell!"
              : ""}
          </Text>
          <Slider
            aria-label="slider-ex-6"
            color={isBuying ? "teal" : "red"}
            colorScheme={isBuying ? "teal" : "red"}
            max={
              isBuying
                ? Math.floor(
                    player.cash / mineralToBuyOrSell.price > 100
                      ? 100
                      : player.cash / mineralToBuyOrSell.price
                  )
                : mineralToBuyOrSell.amountOwned
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
              <Box color={isBuying ? "teal" : "red"} as={GiMineralPearls} />
            </SliderThumb>
          </Slider>
        </Flex>

        <Flex marginTop="40px" direction="column">
          <Text color="white">
            Current Amount: {mineralToBuyOrSell.amountOwned}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default SelectedMineral;

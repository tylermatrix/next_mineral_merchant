import React, { useEffect } from "react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  mineralPickedAtom,
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
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { mineralIDAtom } from "../state/GlobalState";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

function SelectedMineral({ mineral: mineralFromArray }) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [sliderValue, setSliderValue] = useState(0);
  const [player, setPlayer] = useAtom(playerAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);

  const [isBuying, setIsBuying] = useState(false);
  const [mineralID, setMineralID] = useAtom(mineralIDAtom);
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  useEffect(() => {
    setSliderValue(currentMineral.amountOwned ? currentMineral.amountOwned : 0);
  }, [currentMineral]);
  const currentMineral = mineral.find((m) => m.id === mineralID);

  const handleChange = (e) => {
    setIsBuying((isBuying = !isBuying));
    console.log(isBuying);
    setSliderValue(currentMineral.amountOwned ? currentMineral.amountOwned : 0);
  };
  const handleBuyOrSell = () => {
    if (isBuying) {
      if (player.cash >= currentMineral.startingPrice * sliderValue) {
        setPlayer({
          ...player,
          cash: player.cash - currentMineral.startingPrice * sliderValue,
        });

        const copyMineral = [...mineral];
        copyMineral[mineralID].amountOwned += sliderValue;
        setMineral(copyMineral);
      }
    }
    if (!isBuying && currentMineral.amountOwned >= sliderValue) {
      setPlayer({
        ...player,
        cash: player.cash + currentMineral.startingPrice * sliderValue,
      });
      if (currentMineral.amountOwned >= sliderValue) {
        const copyMineral = [...mineral];
        copyMineral[mineralID].amountOwned -= sliderValue;
        setMineral(copyMineral);
      }
    }
  };

  return (
    <>
      <ScaleFade initialScale={0.9} in={true}>
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
              as={motion.div}
              transition="ease-in 1s"
            >
              {currentMineral.name} @ $
              {currentMineral.changedPrice
                ? currentMineral.changedPrice
                : currentMineral.startingPrice}
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
          <Flex justifyContent="center" alignItems="center" marginTop="20px">
            <FormControl flexDirection="row">
              <FormLabel color="#fff">Toggle Buy/Sell: </FormLabel>
              <Switch
                colorScheme={isBuying ? "teal" : "red"}
                size="lg"
                id="switch"
                onChange={() => {
                  handleChange();
                }}
              />
            </FormControl>
          </Flex>
          <Button
            colorScheme={isBuying ? "teal" : "red"}
            size="md"
            onClick={() => {
              handleBuyOrSell();
            }}
          >
            {isBuying ? "Buy" : "Sell"}
          </Button>
          <Flex
            direction="column"
            marginTop="50px"
            width="80%"
            alignSelf="center"
          >
            <Text color="red">
              {!isBuying && currentMineral.amountOwned < 1
                ? "You have nothing to sell!"
                : ""}
            </Text>
            <Slider
              aria-label="slider-ex-6"
              color={isBuying ? "teal" : "red"}
              colorScheme={isBuying ? "teal" : "red"}
              defaultValue={currentMineral.amountOwned}
              max={
                isBuying
                  ? Math.floor(
                      player.cash / currentMineral.startingPrice > 100
                        ? 100
                        : player.cash / currentMineral.startingPrice
                    )
                  : currentMineral.amountOwned
              }
              onChange={(val) => setSliderValue(val)}
            >
              <SliderMark value={0} {...labelStyles}>
                0
              </SliderMark>
              <SliderMark
                value={Math.floor(
                  player.cash / currentMineral.startingPrice > 100
                    ? 50
                    : player.cash / currentMineral.startingPrice / 2
                )}
                {...labelStyles}
              >
                {Math.floor(
                  player.cash / currentMineral.startingPrice > 100
                    ? 50
                    : player.cash / currentMineral.startingPrice / 2
                )}
              </SliderMark>
              <SliderMark value={100} {...labelStyles}>
                {Math.floor(player.cash / currentMineral.startingPrice)}
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
              Current Amount: {currentMineral.amountOwned}
            </Text>
          </Flex>
        </Flex>
      </ScaleFade>
    </>
  );
}

export default SelectedMineral;

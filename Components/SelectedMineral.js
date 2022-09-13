import React, { useEffect } from "react";
import { useAtom } from "jotai";
import {
  mineralAtom,
  mineralPickedAtom,
  playerAtom,
  dayAtom,
} from "../state/GlobalState";
import { Flex, Text, Box } from "@chakra-ui/react";
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
import { ScaleFade } from "@chakra-ui/react";

function SelectedMineral({ mineral: mineralFromArray }) {
  const [mineralPicked, setMineralPicked] = useAtom(mineralPickedAtom);
  const [sliderValue, setSliderValue] = useState(0);
  const [player, setPlayer] = useAtom(playerAtom);
  const [mineral, setMineral] = useAtom(mineralAtom);
  const [day, setDay] = useAtom(dayAtom);
  const [isBuying, setIsBuying] = useState(false);
  const [mineralID, setMineralID] = useAtom(mineralIDAtom);
  const labelStyles = {
    mt: "4",
    ml: "-2.5",
    fontSize: "sm",
  };

  useEffect(() => {
    setSliderValue(currentMineral.amountOwned ? currentMineral.amountOwned : 0);
  }, [currentMineral]);

  const currentMineral = mineral.find((m) => m.id === mineralID);

  const maxValueFunction = () => {
    if (currentMineral.changedPrice) {
      if (player.cash / currentMineral.changedPrice >= 100) {
        return 100;
      } else {
        return player.cash / currentMineral.changedPrice;
      }
    } else {
      if (player.cash / currentMineral.startingPrice >= 100) {
        return 50;
      } else {
        return player.cash / currentMineral.startingPrice;
      }
    }
  };

  const maxBuySliderValue = Math.floor(maxValueFunction());
  console.log(maxBuySliderValue);
  const handleChange = (e) => {
    setIsBuying((isBuying = !isBuying));
    console.log(currentMineral.changedPrice);
    console.log(isBuying);
    setSliderValue(currentMineral.amountOwned ? currentMineral.amountOwned : 0);
  };
  const handleBuyOrSell = () => {
    if (day == 0) {
      if (isBuying) {
        if (
          player.cash >= currentMineral.startingPrice * sliderValue &&
          currentMineral.amountOwned + sliderValue <= 100
        ) {
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
    } else {
      if (isBuying) {
        if (
          player.cash >= currentMineral.changedPrice * sliderValue &&
          currentMineral.amountOwned + sliderValue <= 100
        ) {
          setPlayer({
            ...player,
            cash: player.cash - currentMineral.changedPrice * sliderValue,
          });

          const copyMineral = [...mineral];
          copyMineral[mineralID].amountOwned += sliderValue;
          setMineral(copyMineral);
        }
      }
      if (!isBuying && currentMineral.amountOwned >= sliderValue) {
        setPlayer({
          ...player,
          cash: player.cash + currentMineral.changedPrice * sliderValue,
        });
        if (currentMineral.amountOwned >= sliderValue) {
          const copyMineral = [...mineral];
          copyMineral[mineralID].amountOwned -= sliderValue;
          setMineral(copyMineral);
        }
      }
    }
  };

  /*
  if (isBuying) {
      if (day > 0) {
        if (
          player.cash >= currentMineral.changedPrice * sliderValue &&
          currentMineral.amountOwned + sliderValue <= 100
        ) {
          setPlayer({
            ...player,
            cash: player.cash - currentMineral.changedPrice * sliderValue,
          });

          const copyMineral = [...mineral];
          copyMineral[mineralID].amountOwned += sliderValue;
          setMineral(copyMineral);
        }

        if (!isBuying && currentMineral.amountOwned >= sliderValue) {
          console.log("we got here");
          setPlayer({
            ...player,
            cash: player.cash + currentMineral.changedPrice * sliderValue,
          });
          if (currentMineral.amountOwned >= sliderValue) {
            const copyMineral = [...mineral];
            copyMineral[mineralID].amountOwned -= sliderValue;
            setMineral(copyMineral);
          }
        }
      } else if (day == 0) {
        if (
          player.cash >= currentMineral.startingPrice * sliderValue &&
          currentMineral.amountOwned + sliderValue <= 100
        ) {
          setPlayer({
            ...player,
            cash: player.cash - currentMineral.startingPrice * sliderValue,
          });

          const copyMineral = [...mineral];
          copyMineral[mineralID].amountOwned += sliderValue;
          setMineral(copyMineral);
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
      }
    }*/

  return (
    <>
      <ScaleFade initialScale={0.9} in={true}>
        <Flex direction="column">
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
              transition="ease-in 1s"
              width="200px"
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
              height="31.3px"
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
              size="195.46px"
            >
              <CircularProgressLabel color="white">
                {sliderValue}
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Flex justifyContent="center" alignItems="center" marginTop="20px">
            <FormControl flexDirection="row" maxW="200px">
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

            <Button
              colorScheme={isBuying ? "teal" : "red"}
              size="md"
              height="70px"
              width="100px"
              onClick={() => {
                handleBuyOrSell();
              }}
            >
              {isBuying ? "Buy" : "Sell"}
            </Button>
          </Flex>

          <Flex direction="row" justifyContent="center" alignItems="center">
            <Text
              color="#c1c1c1"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="14px"
              lineHeight="38px"
              marginTop="10px"
            >
              Current Amount:
            </Text>
            <Text
              color={currentMineral.amountOwned ? "green" : "#c1c1c1"}
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="14px"
              lineHeight="38px"
              marginTop="10px"
              marginLeft="10px"
            >
              {currentMineral.amountOwned}
            </Text>
          </Flex>
          <Flex
            direction="column"
            marginTop="20px"
            width="80%"
            alignSelf="center"
          >
            <Box maxW="400px">
              <Slider
                aria-label="slider-ex-6"
                color={isBuying ? "teal" : "red"}
                colorScheme={isBuying ? "teal" : "red"}
                defaultValue={currentMineral.amountOwned}
                max={isBuying ? maxBuySliderValue : currentMineral.amountOwned}
                onChange={(val) => setSliderValue(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>

                <SliderThumb boxSize={6}>
                  <Box color={isBuying ? "teal" : "red"} as={GiMineralPearls} />
                </SliderThumb>
              </Slider>
            </Box>

            <Flex justifyContent="center">
              <Text color="red" marginTop="10px">
                {!isBuying && currentMineral.amountOwned < 1
                  ? "You have nothing to sell!"
                  : ""}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ScaleFade>
    </>
  );
}

export default SelectedMineral;

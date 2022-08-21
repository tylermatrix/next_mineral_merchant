import React from "react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { selectedPlanetAtom } from "../state/GlobalState";

function TravelButton({ planetName = "planet" }) {
  const [selectedPlanet, setSelectedPlanet] = useAtom(selectedPlanetAtom);
  return (
    // <div>
    //   <div
    //     className="travelButton"
    //     onClick={() => {
    //       setSelectedPlanet(planetName);
    //     }}
    //   >
    //     <div className="travelButtonText">
    //       <div
    //         className={
    //           "circle" + " " + (planetName == selectedPlanet ? "active" : null)
    //         }
    //       >
    //         <Text className="text">
    //           {planetName == selectedPlanet ? "Here" : "Visit"}
    //         </Text>
    //       </div>
    //     </div>
    //     <h4 className="text">{planetName}</h4>
    //   </div>
    // </div>
    <Flex direction="column" gap="8.6px">
      <Flex
        height="100px"
        width="100px"
        borderRadius="50%"
        background={
          planetName == selectedPlanet
            ? "linear-gradient(293.71deg, #00FCE2 32.27%, rgba(255, 255, 255, 0.87) 87.87%)"
            : "linear-gradient(293.71deg, #A72C2C 21.26%, rgba(255, 255, 255, 0.87) 87.87%)"
        }
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          setSelectedPlanet(planetName);
        }}
      >
        <Flex
          height="80px"
          width="80px"
          borderRadius="50%"
          background="#353448"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.25), inset 11px 8px 16px rgba(10, 9, 26, 0.86), inset -5px -5px 15px #646282"
          justifyContent="center"
          alignItems="center"
        >
          <Text className="text">
            {planetName == selectedPlanet ? "Here" : "Visit"}
          </Text>
        </Flex>
      </Flex>
      <Text color="white" textAlign="center">
        {planetName}
      </Text>
    </Flex>
  );
}

export default TravelButton;

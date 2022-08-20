import { Flex, Text } from "@chakra-ui/react";
import TravelButton from "./TravelButton";
import { atom, useAtom } from "jotai";
import { planetAtom } from "../state/GlobalState";
export default function Travel() {
  const [planets, setPlanets] = useAtom(planetAtom);

  return (
    <Flex
      minW="387px"
      height="544px"
      direction="column"
      bg="#353448"
      borderRadius="15px"
      direction="column"
    >
      <h1 className="h1Travel">Travel</h1>
      <section className="planets-section">
        <div className="row">
          <TravelButton planetName={planets[0].name}></TravelButton>
          <TravelButton planetName={planets[1].name}></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName={planets[2].name}></TravelButton>
          <TravelButton planetName={planets[3].name}></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName={planets[4].name}></TravelButton>
          <TravelButton planetName={planets[5].name}></TravelButton>
        </div>
      </section>
    </Flex>
  );
}

import { Flex, Text } from "@chakra-ui/react";
import TravelButton from "./TravelButton";
export default function Travel() {
  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];
  const planetList = planets.map((planet) => {
    return (
      <div key={planet}>
        <div className="planetBadge">1</div>
        <h3>{planet}</h3>
      </div>
    );
  });

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
          <TravelButton planetName="Fitzgerald 5"></TravelButton>
          <TravelButton planetName="Quetzacotl"></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName="Ariana Prime"></TravelButton>
          <TravelButton planetName="Euclid"></TravelButton>
        </div>
        <div className="row">
          <TravelButton planetName="Artemis"></TravelButton>
          <TravelButton planetName="Utopia"></TravelButton>
        </div>
      </section>
    </Flex>
  );
}

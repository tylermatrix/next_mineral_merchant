import { Flex, Text } from "@chakra-ui/react";

export default function News() {
  return (
    <Flex
      minW="387px"
      height="291px"
      direction="column"
      bg="#353448"
      borderRadius="15px"
    >
      <h1 className="h1News">Breaking News</h1>

      <div className="event">
        <div className="event_image">
          <img src="https://i.imgur.com/RsPiQHZ.png" alt="Event image" />
        </div>
        <div className="event_text">
          <h2 className="h2News">Event title</h2>
          <p className="pNews">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
          </p>
        </div>
      </div>

      <div className="event">
        <div className="event_image">
          <img src="https://i.imgur.com/RsPiQHZ.png" alt="Event image" />
        </div>
        <div className="event_text">
          <h2 className="h2News">Event title</h2>
          <p className="pNews">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
          </p>
        </div>
      </div>
    </Flex>
  );
}

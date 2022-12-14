import React from "react";
import { Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
function NewsItem({ newsItem, id }) {
  return (
    <>
      <Flex
        borderRadius="20px"
        className="event"
        maxW="385px"
        bg="#49485A"
        opacity="0.8"
        as={motion.div}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key={id}
      >
        <div className="event_image">
          <Image
            src={newsItem.img}
            alt="Event image"
            width="77.38px"
            borderRadius="10px"
          />
        </div>
        <div className="event_text">
          <h2 className="h2News">Luck of the Irish!</h2>
          <p className="pNews">
            {newsItem?.msg}
            <br />
          </p>
        </div>
      </Flex>
    </>
  );
}

export default NewsItem;

import React from "react";
import { useAtom } from "jotai";
import { Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
function NewsItem({ newsItem, id }) {
  return (
    <>
      <Flex
        borderRadius="20px"
        className="event"
        bg="#a1a"
        opacity="0.8"
        as={motion.div}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key={id}
      >
        <div className="event_image">
          <Image src={newsItem.img} alt="Event image" width="77.38px" />
        </div>
        <div className="event_text">
          <h2 className="h2News">Mineral prices up!</h2>
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

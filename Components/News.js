import { Flex, Text } from "@chakra-ui/react";
import { breakingGoodNewsAtom, mineralAtom } from "../state/GlobalState";
import { useAtom } from "jotai";
import { dayAtom } from "../state/GlobalState";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";

export default function News() {
  const [breakingGoodNews, setBreakingGoodNews] = useAtom(breakingGoodNewsAtom);
  const [breakingNewsItem, setBreakingNewsItem] = useState([]);
  const [mineral, setMineral] = useAtom(mineralAtom);

  const [day, setDay] = useAtom(dayAtom);
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * breakingGoodNews.length);
    const randomEvent = Math.floor(Math.random() * breakingGoodNews.length);

    if (randomIndex === randomEvent) {
      setShowNews(true);
      const random = Math.floor(Math.random() * mineral.length);
      const newMineral = mineral.map((item) => {
        if (mineral[random] == item) {
          item.changedPrice = item.changedPrice * 3;
        }
        return {
          ...item,
        };
      });

      setMineral(newMineral);
      setBreakingNewsItem(
        ...breakingGoodNews,
        (breakingGoodNews[
          randomIndex
        ].msg = `${mineral[random].name} prices have skyrocketed! Sell some if you can!`)
      );
    } else {
      setShowNews(false);
    }
  }, [day]);

  return (
    <Flex
      minW="420px"
      maxW="420px"
      height="291px"
      direction="column"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
      borderRadius="15px"
      as={motion.div}
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        fontSize="25px"
        lineHeight="38px"
        color="#C1C1C1"
        margin="25px"
        as={motion.div}
        whileHover={{ color: "#fff" }}
      >
        Breaking News
      </Text>
      {showNews ? (
        <NewsItem newsItem={breakingNewsItem} id={breakingNewsItem.id} />
      ) : null}
    </Flex>
  );
}

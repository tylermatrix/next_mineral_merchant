import { Flex, Text, Image, useFocusEffect } from "@chakra-ui/react";
import { breakingGoodNewsAtom } from "../state/GlobalState";
import { useAtom } from "jotai";
import { dayAtom } from "../state/GlobalState";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";

export default function News() {
  const [breakingGoodNews, setBreakingGoodNews] = useAtom(breakingGoodNewsAtom);
  const [breakingNewsItem, setBreakingNewsItem] = useState([]);
  const [day, setDay] = useAtom(dayAtom);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * breakingGoodNews.length);
    setBreakingNewsItem(breakingGoodNews[randomIndex]);
  }, [breakingGoodNews, day]);

  const newsItems = [];
  return (
    <Flex
      minW="387px"
      height="291px"
      direction="column"
      bg="#353448"
      boxShadow="4px 4px 18px #0A091A, -3px -3px 15px #646282"
      borderRadius="15px"
      as={motion.div}
      initial={{ y: -200 }}
      animate={{ y: 0 }}
    >
      <h1 className="h1News">Breaking News</h1>
      <NewsItem newsItem={breakingNewsItem} id={breakingNewsItem.id} />
    </Flex>
  );
}

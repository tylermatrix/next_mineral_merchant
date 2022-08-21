import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import Header from "../components/Header";
export default function Home() {
  return (
    <>
      <Header />

      <Flex justify="center" gap="11px" mt="20px" fontFamily={"Poppins"}>
        <LeftColumn />
        <RightColumn />
      </Flex>
    </>
  );
}

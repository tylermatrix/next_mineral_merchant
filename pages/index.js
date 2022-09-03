import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import LeftColumn from "../Components/LeftColumn";
import RightColumn from "../Components/RightColumn";
import Header from "../Components/Header";
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

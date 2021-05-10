import Head from "next/head";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import SectionHeader from "components/SectionHeader";
import Hackathons from "components/Hacktahons";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Redha Azmei</title>
      </Head>
      <Box mb={"8"}>
        <SectionHeader>About</SectionHeader>
        <Text>Howdy 👋. I'm a Data Scientist with deep interest in Machine Learning (ML), Artificial Intelligence (AI) and modern Web Technologies. Currently working in the aviation industry based in Malaysia 🇲🇾.</Text>
      </Box>
      <SectionHeader>Hackathons</SectionHeader>
      <Hackathons />
    </>
  );
};

export default Home;

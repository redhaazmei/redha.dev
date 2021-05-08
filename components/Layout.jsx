import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Redha Azmei</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box maxW={"2xl"} w={"100%"} mt={"20"} mx={"6"}>
          <Navbar />
          {children}
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;

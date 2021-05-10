import { Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Flex direction={"column"} maxW={"2xl"} w={["xs", "md", "xl", "2xl"]} mt={"16"} mx={"6"}>
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;

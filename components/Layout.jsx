import { Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Flex direction={"column"} maxW={"2xl"} w={"100%"} mt={"20"} mx={"6"}>
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;

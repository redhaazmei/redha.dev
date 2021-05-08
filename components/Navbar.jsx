import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Divider, Flex, Heading, Icon, Stack, Switch, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import CustomButton from "components/CustomButton";

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box mb={"8"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} mb={"4"}>
          <Box>
            <Heading size={"lg"}>Redha Azmei</Heading>
          </Box>
          <Stack direction={"row"} alignItems="center">
            <Icon as={FiSun} color={colorMode === "dark" ? "gray.600" : "black"} />
            <Switch aria-label="Dark Mode Switch" colorScheme={"teal"} isChecked={colorMode === "dark" ? true : false} onChange={toggleColorMode} />
            <Icon as={FiMoon} color={colorMode === "dark" ? "white" : "gray.300"} />
          </Stack>
        </Flex>
        <Divider mb={"4"} />
        <Stack direction={"row"}>
          <Link href={"/"}>
            <CustomButton size={"xs"} width={"8em"} borderRadius={"full"} isActive={router.pathname === "/" ? true : false}>
              Home
            </CustomButton>
          </Link>
          <Link href={"/blog"}>
            <CustomButton size={"xs"} width={"8em"} borderRadius={"full"} isActive={router.pathname === "/blog" ? true : false}>
              Blog
            </CustomButton>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;

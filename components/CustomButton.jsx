import { Button, useColorMode } from "@chakra-ui/react";

const CustomButton = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Button {...props} variant={"outline"} borderColor={colorMode === "dark" ? "white" : "black"} _hover={{ bg: colorMode === "dark" ? "white" : "black", color: colorMode === "dark" ? "black" : "white" }} _active={{ bg: colorMode === "dark" ? "white" : "black", color: colorMode === "dark" ? "black" : "white" }}>
        {children}
      </Button>
    </>
  );
};

export default CustomButton;

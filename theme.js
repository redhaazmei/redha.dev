import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
};

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "black" : "white",
      lineHeight: "tall",
    },
    "h1, h2, h3, h4, h5, h6": {
      letterSpacing: "tighter",
      color: props.colorMode === "dark" ? "white" : "black",
    },
    "p, ul, ol": {
      fontSize: ["0.85em", "sm"],
      letterSpacing: "tight",
      color: props.colorMode === "dark" ? "gray.300" : "gray.700",
    },
    strong: {
      color: props.colorMode === "dark" ? "white" : "black",
    },
  }),
};

const theme = extendTheme({ config, fonts, styles });
export default theme;

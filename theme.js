import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
};

const colors = {
  primary: "#4FD1C5",
  secondary: "#38B2AC",
};

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "black" : "white",
      lineHeight: "tall",
    },
    "h1, h2, h3, h4, h5, h6": {
      letterSpacing: "tight",
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
    ".prose": {
      "h1, h2, h3, h4, h5, h6": {
        fontWeight: "bold",
      },
      h1: {
        fontSize: "2xl",
        mt: "6",
        mb: "1",
      },
      h2: {
        fontSize: "xl",
        mt: "6",
        mb: "2",
      },
      h3: {
        fontSize: "lg",
      },
      p: {
        mb: "4",
      },
      blockquote: {
        "& p": {
          mb: "0",
        },
      },
      pre: {
        w: ["xs", "md", "xl", "2xl"],
        mb: "4",
        borderRadius: "lg",
        bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
        fontFamily: "Fira Code",
        fontSize: ["xs", "sm"],
        "&::-webkit-scrollbar": {
          h: "0.5em",
          bg: "transparent",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "lg",
          bg: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "lg",
          bg: props.colorMode === "dark" ? "gray.600" : "gray.300",
        },
      },
      code: {
        px: "1",
        py: "0.1rem",
        fontSize: "xs",
        fontWeight: "normal",
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "gray.700" : "gray.100",
        border: "1px solid",
        borderColor: props.colorMode === "dark" ? "brand.purple500" : "gray.300",
        borderRadius: "md",
      },
      ul: {
        listStylePosition: "inside",
        mb: "8",
      },
      ol: {
        listStylePosition: "inside",
        mb: "8",
      },
      li: {
        pl: "1",
        mb: "2",
      },
      hr: {
        mb: "8",
      },
    },
  }),
};

const theme = extendTheme({ config, fonts, colors, styles });
export default theme;

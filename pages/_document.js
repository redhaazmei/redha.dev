import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=optional" />
          <link rel="stylesheet preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=optional" crossOrigin="anonymous" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

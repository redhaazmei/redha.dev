import "focus-visible/dist/focus-visible";
import "@fontsource/inter/500.css";
import "@fontsource/inter/800.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import theme from "theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;

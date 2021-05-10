import "focus-visible/dist/focus-visible";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import "@fontsource/fira-code";
import { MDXProvider } from "@mdx-js/react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import MDXComponents from "components/MDXComponents";
import theme from "theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;

import "focus-visible/dist/focus-visible";
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

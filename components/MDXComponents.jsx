import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import MDXCode from "components/MDXCode";

const MDXAnchor = ({ children, href }) => {
  return (
    <>
      <Link href={href} as="a" color="secondary" fontWeight="bold" textDecor="underline" _hover={{ color: "primary" }} isExternal>
        {children}
      </Link>
    </>
  );
};

const MDXBlockquote = ({ children }) => {
  return (
    <Box as="blockquote" bg={useColorModeValue("gray.100", "gray.900")} borderLeft="solid" borderColor="primary" pl="6" pr="4" py="4" mb="8" fontWeight="bold">
      {children}
    </Box>
  );
};

const MDXComponents = {
  code: MDXCode,
  a: MDXAnchor,
  blockquote: MDXBlockquote,
};

export default MDXComponents;

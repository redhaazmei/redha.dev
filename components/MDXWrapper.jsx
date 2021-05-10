import { Box } from "@chakra-ui/react";

const MDXWrapper = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default MDXWrapper;

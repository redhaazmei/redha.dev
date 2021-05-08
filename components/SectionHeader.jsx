import { Heading } from "@chakra-ui/react";

const SectionHeader = ({ children }) => {
  return (
    <>
      <Heading my={"4"}>{children}</Heading>
    </>
  );
};

export default SectionHeader;

import Head from "next/head";
import Link from "next/link";
import { getallposts } from "lib/getposts";
import { Box, Heading, Text, InputGroup, InputLeftElement, Input, useColorMode } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import SectionHeader from "components/SectionHeader";

const Blog = ({ allposts }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Blog | Redha Azmei</title>
      </Head>
      <SectionHeader>Blog</SectionHeader>
      <InputGroup mb={"4"}>
        <InputLeftElement pointerEvents={"none"} children={<FiSearch />} />
        <Input type={"text"} variant={"flushed"} focusBorderColor={"primary"} placeholder="Search article" />
      </InputGroup>
      <Box>
        {allposts.map((post) => {
          return (
            <Link key={post.title} href={`/blog/${post.slug}`}>
              <Box role={"group"} py={"2"} _hover={{ cursor: "pointer" }}>
                <Heading size={"md"} mb={"1"} _groupHover={{ color: colorMode === "dark" ? "primary" : "secondary" }}>
                  {post.title}
                </Heading>
                <Text mb={"2"}>{post.description}</Text>
              </Box>
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const allposts = getallposts();
  return {
    props: {
      allposts,
    },
  };
};

export default Blog;

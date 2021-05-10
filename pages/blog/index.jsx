import Head from "next/head";
import { getallposts } from "lib/getposts";
import { Box, Text } from "@chakra-ui/react";
import SectionHeader from "components/SectionHeader";

const Blog = ({ allposts }) => {
  return (
    <>
      <Box mb={"8"}>
        <SectionHeader>Blog</SectionHeader>
        <Text>
          I've written a total of <strong>34</strong> blog posts here.
        </Text>
        <Text>Find the articles that suit your interests by searching in the 🔍 box below.</Text>
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

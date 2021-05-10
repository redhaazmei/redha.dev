import Head from "next/head";
import Link from "next/link";
import { getallslugs, getsinglepost } from "lib/getposts";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Box, Text, Icon, Flex, Heading } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import MDXWrapper from "components/MDXWrapper";

const BlogPost = ({ frontmatter, content }) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | Redha Azmei</title>
      </Head>
      <Link href={"/blog"}>
        <Flex alignItems={"center"} mt={"4"} mb={"6"}>
          <Icon as={FiArrowLeft} />
          <Text fontWeight={"bold"} ml={"1"} _hover={{ cursor: "pointer", color: "primary" }}>
            Back to blog
          </Text>
        </Flex>
      </Link>
      <Box mb={"8"}>
        <Heading size={"2xl"} mb={"2"}>
          {frontmatter.title}
        </Heading>
        <Text>
          {frontmatter.date} | {frontmatter.readingtime}
        </Text>
      </Box>
      <MDXWrapper>
        <MDXRemote {...content} />
      </MDXWrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = getallslugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const singlepost = await getsinglepost(slug);
  const frontmatter = { title: singlepost.title, date: singlepost.date, description: singlepost.description, category: singlepost.category, image: singlepost.image, slug: singlepost.slug, readingtime: singlepost.readingtime };
  const content = await serialize(singlepost.content);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export default BlogPost;

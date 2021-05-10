import { getallslugs, getsinglepost } from "lib/getposts";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXWrapper from "components/MDXWrapper";

const BlogPost = ({ mdxSource }) => {
  return (
    <>
      <div>
        <MDXRemote {...mdxSource} />
      </div>
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
  const mdxSource = await serialize(singlepost.content);
  return {
    props: {
      mdxSource,
    },
  };
};

export default BlogPost;

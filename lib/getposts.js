import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const getallposts = () => {
  const filenames = fs.readdirSync("blogposts");
  const allposts = filenames.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const post = fs.readFileSync(path.join("blogposts", slug + ".mdx"), "utf8");
    const { content, data } = matter(post);
    const stats = readingTime(content);
    const readingtime = stats.text;
    const frontmatter = { ...data, slug: slug, readingtime: readingtime };
    return frontmatter;
  });
  return allposts;
};

const getsinglepost = async (slug) => {
  const singlepost = fs.readFileSync(path.join("blogposts", slug + ".mdx"), "utf8");
  const { content, data } = matter(singlepost);
  const stats = readingTime(content);
  const readingtime = stats.text;
  const frontmatter = { ...data, slug: slug, readingtime: readingtime, content: content };
  return frontmatter;
};

const getallslugs = () => {
  const filenames = fs.readdirSync("blogposts");
  const slugs = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
  return slugs;
};

export { getallposts, getsinglepost, getallslugs };

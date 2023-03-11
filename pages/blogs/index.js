import Head from "next/head";
import { Card } from "../../components";
import styles from "../../styles/blog.module.css";
import { createClient } from "contentful";
import { motion, useAnimation } from "framer-motion";

const Blog = ({ data: blogs }) => {
  const controls = useAnimation();

  if (blogs.length === 0) {
    return (
      <main className={styles.blog}>
        <Head>
          <title>Blogs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.intro}></section>
        <section className={styles.blog_container}>
          <h1>There are currently no blogs</h1>
        </section>
      </main>
    );
  }
  return (
    <main className={styles.blog}>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.intro}></section>
      <section className={styles.blog_container}>
        {blogs.map((blog) => {
          const {
            blogTitle,
            id,
            blogImage: {
              fields: {
                file: { url },
              },
            },
            blogInfo,
          } = blog.fields;
          return (
            <Card
              key={id}
              img={url}
              id={id}
              title={blogTitle}
              info={blogInfo}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Blog;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({ content_type: "blogs" });
  return {
    props: {
      data: res.items,
    },
    revalidate: 3, // revalidate after 3 seconds
  };
}

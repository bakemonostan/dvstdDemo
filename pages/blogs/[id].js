import { createClient } from "contentful";
import styles from "../../styles/blogPage.module.css";

const BlogItem = ({ blog }) => {
  const {
    fields: {
      blogTitle,
      blogInfo,
      blogDetails: { content },
    },
  } = blog;
  const blogContent = content[0].content[0].value;
  return (
    <div className={styles.blog}>
      <section className={styles.main_blog}>
        <div className={styles.head}>
          <h3>{blogTitle}</h3>
        </div>
        <div className={styles.info}>
          <p>{blogInfo}</p>
        </div>
        <div className={styles.details}>
          <p>{blogContent}</p>
        </div>
      </section>
    </div>
  );
};
export default BlogItem;

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({ content_type: "blogs" });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const { items } = await client.getEntries({
    content_type: "blogs",
    "fields.id": params.id,
  });

  return {
    props: {
      blog: items[0],
    },
    revalidate: 3,
  };
}

import { createClient } from 'contentful';
import styles from '../../styles/projectPage.module.css';
import 'swiper/css';
import SectionOne from '../../components/ProjectPage/Sections';

const SingleProject = ({ project }) => {
  return (
    <main className={styles.main}>
      {project && <SectionOne project={project} />}
    </main>
  );
};
export default SingleProject;

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({ content_type: 'featured' });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const { items } = await client.getEntries({
    content_type: 'featured',
    'fields.id': params.id,
  });

  return {
    props: {
      project: items[0],
    },
    revalidate: 3,
  };
}

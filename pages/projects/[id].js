import { createClient } from 'contentful';
import styles from '../../styles/projectPage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import SectionOne from '../../components/ProjectPage/Sections';

const Project = ({ project }) => {
  const {
    fields: {
      title,
      imageSlide,
      projectDesc: { content },
    },
  } = project;

  const desc = content[0].content[0].value;
  return (
    <main className={styles.main}>
      <SectionOne project={project} />
    </main>
  );
};
export default Project;

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({ content_type: 'projects' });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.fields.slug },
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
    content_type: 'projects',
    'fields.slug': params.id,
  });

  return {
    props: {
      project: items[0],
    },
    revalidate: 3,
  };
}

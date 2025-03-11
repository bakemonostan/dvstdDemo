import { createClient } from "contentful";
import Head from "next/head";
import { GridContainer, Video } from "../components";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const DynamicVid = dynamic(
  () => import("../components/VideoComponent/Video.jsx"),
  {
    loading: () => "Loading...",
  }
);
const DynamicImg = dynamic(() => import("next/image"), {
  loading: () => "Loading...",
});

export default function Home({ data }) {
  return (
    <AnimatePresence>
      <motion.main>
        <section className={styles.container}>
          <Head>
            <title>DVSTD - Research based design studio</title>
            <meta
              name="DVSTD"
              content="Research based design studio. Group of ideal minds with a common goal,Architecture, 3D Visualization, Real Estate"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <section className={styles.grid}>

            <div className={styles.head}>
              <p>
                We are forward-thinking leaders in architecture and interior
                design.
              </p>
              <video
                src="/static/video.mp4"
                width="100%"
                height="240"
                loop
                autoPlay
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.image}>
              <DynamicImg
                src="/static/hero.webp"
                width={1000}
                height={1000}
                alt="hero-image"
                priority
              />
            </div>
          </section>
        </section>
        <section className={styles.about}>
          <GridContainer data={data} />
          <DynamicVid />
        </section>
      </motion.main>
    </AnimatePresence>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({
    content_type: "featured",
  });
  return {
    props: {
      data: res.items,
    },
    revalidate: 3,
  };
}


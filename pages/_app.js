import Layout from "../components/Layout/Layout.jsx";
import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";

function MyApp({ Component, pageProps }) {
  const [comingSoon, setComingSoon] = useState(false);

  if (comingSoon) {
    return <ComingSoon />;
  }
  return (
    <AnimatePresence>
      <Layout>
        <Head>
          <title>DVSTD - Research based design studio</title>
          <meta
            name="description"
            content="We are forward-thinking leaders in architecture and interior design, specializing in 3D Visualization, Real Estate and more"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;

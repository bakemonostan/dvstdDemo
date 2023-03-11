import { createClient } from "contentful";
import { Main } from "../../components";

import dynamic from "next/dynamic";

const DynamicComp = dynamic(
  () => import("../../components/ProjectsSection/Main.jsx"),
  {
    loading: () => "Loading...",
  }
);

const Projects = ({ data }) => {
  return <DynamicComp data={data} />;
};
export default Projects;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACEID,
    accessToken: process.env.ACCESS_TKN,
  });
  const res = await client.getEntries({ content_type: "projects" });
  return {
    props: {
      data: res.items,
    },
    revalidate: 3,
  };
}

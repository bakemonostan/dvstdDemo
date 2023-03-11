import styles from './Main.module.css';
import Head from 'next/head';
import { BiChevronDown } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Main = ({ data }) => {
  const [showProjects, setShowProjects] = useState();
  const projects = [
    'project one',
    'project two',
    'project three',
    'project four',
    'project five',
    'project six',
    'project seven',
    'project eight',
    'project nine',
  ];

  return (
    <section className={styles.main}>
      <Head>
        <title>Projects</title>
      </Head>
      {/* project section */}
      <h2>Project page</h2>

      {/* select menu */}
      <div className={styles.container}>
        <div className={styles.select} onClick={() => setShowProjects(true)}>
          <p>Explore Projects</p>
          <BiChevronDown />
        </div>

        {/* dropdown menu */}
        <div
          className={`${[
            styles.select_dropdown,
            showProjects ? styles.show : ' ',
          ].join(' ')}`}
        >
          <div className={styles.close} onClick={() => setShowProjects(false)}>
            <GrFormClose />
          </div>
          <div className={styles.project_container}>
            {projects.map((project) => {
              return (
                <div className={styles.project} key={project}>
                  <p>{project}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className={styles.card_section}>
        {data.map((items) => {
          return (<ProjectCard key={items.fields.title} projects={items} />);
        })}
      </section>
    </section>
  );
};
export default Main;

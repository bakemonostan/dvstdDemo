import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

import styles from './Navbar.module.css';

import MobileMenu from '../MobileMenu/MobileMenu';
import Modal from '../Modal/Modal';
import Dark from '../logo/Dark';
import Light from '../logo/Light'

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const hideMenu = () => {
    setMenu(false);
  };



  const router = useRouter();
  const { asPath } = router;
  return (
    <nav
      className={`${asPath === '/contact' ? styles.nav_container2 :
        asPath === '/projects' || asPath === '/blogs' ? styles.nav_containerBlog :
          styles.nav_container
        }`}
    >

      {modal && <Modal modal={modal} setModal={setModal} />}
      <div className={styles.nav}>
        <div>
          {asPath === '/contact' ? <Light /> : <Dark />}
        </div>
        <div>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href='/blogs'>Blogs</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href='/contact'>About</Link>
            </li>
            <motion.li
              animate={{ scale: 1.1 }}
              exit={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", }}
              onClick={() => setModal(true)}
              className={styles.designYours}>
              <p>Design Yours</p>
            </motion.li>
          </ul>
        </div>
        <div className={styles.menu}>
          <FaBars onClick={toggleMenu} />
        </div>
        {menu && <MobileMenu hideMenu={hideMenu} menu={menu} setModal={setModal} />}
      </div>

    </nav>
  );
};
export default Navbar;

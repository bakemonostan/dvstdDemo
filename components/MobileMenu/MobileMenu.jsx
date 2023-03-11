import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Mobilemenu.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const MobileMenu = ({ hideMenu, menu, setModal }) => {
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    document.addEventListener('scroll', hideMenu);
  }, [hideMenu])

  return (
    <div
      className={`${asPath !== '/contact' ? styles.menu_container : styles.contact_menu
        } ${styles.menu} ${menu ? styles.show : ''}`}
    >
      <div className={styles.backdrop} onClick={hideMenu}></div>
      <div className={styles.links}>
        <div>
          <ul className={styles.menu_links}>
            <li className={styles.menu_links} onClick={hideMenu}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.menu_links} onClick={hideMenu}>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className={styles.menu_links} onClick={hideMenu}>
              <Link href='/blogs'>Blogs</Link>
            </li>
            <li className={styles.menu_links} onClick={hideMenu}>
              <Link href='/contact'>About</Link>
            </li>
            <li
              onClick={() => setModal(true)}
              className={styles.designYours}>
              Design Yours
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;

import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiIssuu } from 'react-icons/si';
import styles from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {/* 1 */}

        {/* 2 */}
        <div className={styles.footer_links}>
          <h4>Quick Links</h4>
          <div className={styles.flex}>
            <Link href='/'> Home</Link>
            <Link href='/projects'> Projects</Link>
            <Link href='/blogs'> Blogs</Link>
            <Link href='/contact'> About</Link>
          </div>
        </div>
        <div className={styles.footer_contact}>
          <h4>Contact Us</h4>
          <div className={styles.flex}>
            <p>Lemesjö 23, <br /> Oskarhamn, <br /> Sweden</p>
            <p>dovestudio@reftek.co</p>
          </div>
        </div>
        <div className={styles.footer_socials}>
          <h4>Follow us</h4>
          <div>
            <SiIssuu />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className={styles.cr}>
        <p >
          Copyright © 2022. DoveStudios
        </p>

      </div>
    </footer>
  );
};
export default Footer;

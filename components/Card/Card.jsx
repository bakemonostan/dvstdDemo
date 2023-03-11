import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion'


const Card = ({ id, title, info, img, children }) => {
  return (
    <AnimatePresence>
      <motion.div className={styles.card}
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.card_image}>
          <Image
            src={`https:${img}`}
            width={350}
            height={300}
            alt="blog image"
            className="image"
          />
        </div>

        <div className={styles.card_info}>
          <h3>{title}</h3>
          <p>{info}</p>
          {children}
          <button>
            <Link href={`blogs/${id}`}>Read post</Link>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Card;

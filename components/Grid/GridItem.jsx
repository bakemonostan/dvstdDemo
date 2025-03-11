import Image from 'next/image';
import styles from './GridItem.module.css';
import Link from 'next/link';

const GridItem = ({ featured, index }) => {
  const {
    fields: { title, description, image, id },
  } = featured;
  const {
    fields: {
      file: { url },
    },
  } = image;


  return (
    <figure className={styles.card}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          priority
          src={`https:${url}`}
          width={300}
          height={300}
          alt='test image'
          placeholder='blur'
          blurDataURL="/static/dove_black_sm.webp"
        />
      </div>

      <Link href={`featuredProjects/${id}`}>
        <figcaption className={styles.caption}>
          <p className={styles.title}>{description}</p>
          <p className={styles.location}>location</p>
        </figcaption>
      </Link>
    </figure>
  );
};
export default GridItem;

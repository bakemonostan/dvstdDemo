/* eslint-disable @next/next/no-img-element */
import styles from './Sections.module.css';
import Image from 'next/image';


const SectionTwo = () => {
  return (
    <section className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.tall}>
          <img src='/static/hero.webp' alt='' className={styles.img} />
        </div>
        <div className={styles.short}>
          <img src='/static/hero.webp' alt='' className={styles.img} />
        </div>
        <div className={styles.short}>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non rerum
            ea voluptatibus libero commodi amet quam reiciendis eos doloremque
            laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque odio modi nam, accusamus, ipsa dolorum consequatur deleniti
            iste sunt eum nisi dolorem magnam aperiam soluta quae cum laboriosam
            quo. Ipsa? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Non rerum ea voluptatibus libero commodi amet quam reiciendis eos
            doloremque laudantium! Lorem ipsum dolor sit amet consectetur
            adipisicing
          </p>
        </div>
        <div className={styles.short}>
          <img src='/static/hero.webp' alt='' className={styles.img} />
        </div>
        <div className={styles.tall}>
          <img src='/static/hero.webp' alt='' className={styles.img} />
        </div>
        <div className={styles.short}>
          <img src='/static/hero.webp' alt='' className={styles.img} />
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;

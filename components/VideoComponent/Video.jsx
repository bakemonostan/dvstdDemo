import styles from './Video.module.css';

const Video = () => {
  return (
    <figure className={styles.container}>
      <video
        src='/static/video.mp4'
        width='100%'
        height='100%'
        loop
        autoPlay
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <figcaption className={styles.cta}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3>Let's create something together</h3>
        <p className={styles.contact}>Contact us for enquires</p>
        <button type='button' className={styles.btn}>
          <p>Contact us</p>
        </button>
      </figcaption>
    </figure>
  );
};
export default Video;

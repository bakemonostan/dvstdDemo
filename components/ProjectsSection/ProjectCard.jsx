import styles from './ProjectCard.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Link from 'next/link';

const ProjectCard = ({ projects }) => {
  const {
    fields: { title, description, imgSlide, slug: id },
  } = projects;

  return (
    <div className={styles.card}>
      <Swiper
        spaceBetween={50}
        grabCursor={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
      >
        {imgSlide.map((image) => {
          const img = image.fields.file.url;
          return (
            <SwiperSlide key={image.fields.title}>
              <Image
                src={`https:${img}`}
                alt='test image'
                width={1440}
                height={850}
                priority
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Link href={`projects/${id}`}>
        <div className={styles.details}>
          <div>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.info}>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProjectCard;

// src = `https:${image.fields.file.url}`;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./Sections.module.css";
import SectionTwo from "./SectionTwo";
import dynamic from "next/dynamic";

const DynamicSection = dynamic(() => import("./SectionTwo"), {
  loading: () => "Loading...",
});

const SectionOne = ({ project }) => {
  const {
    fields: {
      title,
      imgSlide,
      projectDesc: { content },
    },
  } = project;
  const desc = content[0].content[0].value;
  return (
    <>
      <section className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.slider}>
          <Swiper spaceBetween={50} grabCursor={true}>
            {imgSlide.map((image) => {
              const img = image.fields.file.url;
              return (
                <SwiperSlide key={image.fields.title}>
                  <Image
                    className={styles.img}
                    src={`https:${img}`}
                    alt="test image"
                    width={1440}
                    height={850}
                    layout="responsive"
                    objectFit="cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={styles.split}>
          <aside className={styles.desc}>
            <p>{desc}</p>
          </aside>
          <aside className={styles.desc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, praesentium a illum rem maiores cumque vero sequi
              aliquam aperiam harum omnis veritatis nesciunt quod ratione
              ducimus dolorum totam porro accusantium.
            </p>
          </aside>
        </div>
      </section>
      <DynamicSection />
    </>
  );
};
export default SectionOne;

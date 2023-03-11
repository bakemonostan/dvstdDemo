/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from './Card.module.css'

const About = ({ img, id, name, position, children }) => {
    return (
        <div className={styles.aboutCard}>
            <div className={styles.aboutCard_img}>
                <img
                    src={img}
                    alt="blog image"
                />
            </div>

            <div className={styles.aboutCard_info}>

                <div className={styles.bold}>
                    <p >Kings Ativie</p>
                    <span>(Msc, Bsc, Bpa, Riba)</span>
                </div>
                <div className={styles.position}>
                    <p>Lead Architect??</p>
                </div>
            </div>
        </div>
    )
}
export default About
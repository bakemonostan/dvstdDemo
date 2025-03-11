import Image from "next/image"
import styles from './logo.module.css'
import Link from "next/link"

const Light = () => {
    return (
        <span className={styles.aboutLogo}>
            <Link href='/'>
                <Image
                    src='/static/newLogoWhite.png'
                    alt='Dove studio logo'
                    className={styles.aboutLogo}
                    width={135}
                    height={53}
                    priority
                />
            </Link>
        </span>
    )
}
export default Light
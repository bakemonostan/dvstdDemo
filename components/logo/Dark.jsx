import Image from "next/image"
import styles from './logo.module.css'
import Link from "next/link"

const Dark = () => {
    return (
        <span className={styles.logo}>
            <Link href='/'>
                <Image src='/static/newLogoBlack.png'
                    alt='Dove studio logo'
                    className={styles.logo}
                    width={135}
                    height={53}
                    priority
                />
            </Link>
        </span>
    )
}
export default Dark
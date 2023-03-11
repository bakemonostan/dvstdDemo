import Image from "next/image"
import styles from './logo.module.css'
import Link from "next/link"

const Dark = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>
                <Image src='/static/dvstd-logo.webp'
                    alt='Dove studio logo'
                    className={styles.logo}
                    width={130}
                    height={53}
                    objectFit='contain'
                    priority
                />
            </Link>
        </div>
    )
}
export default Dark
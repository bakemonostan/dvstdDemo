import Image from "next/image"
import styles from './logo.module.css'
import Link from "next/link"

const Light = () => {
    return (

        <div className={styles.aboutLogo}>
            <Link href='/'>
                <Image
                    src='/static/newLogoWhite.png'
                    alt='Dove studio logo'
                    className={styles.aboutLogo}
                    width={130}
                    height={53}
                    objectFit='cover'
                    priority
                />
            </Link>
        </div>
    )
}
export default Light
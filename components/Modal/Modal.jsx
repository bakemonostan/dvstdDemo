import { motion } from 'framer-motion'
import styles from './Modal.module.css'
import { MdClear } from "react-icons/md";
import Book from './Book';
import { useState } from 'react'


const Modal = ({ setModal }) => {
    const [appointment, setAppointment] = useState(false)

    const hideModal = () => {
        setModal(false)
    }
    const book = () => {
        setAppointment(true)
    }
    const unbook = () => {
        setAppointment(false)
    }

    const handleComposeEmail = () => {
        // window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${defaultEmail}`, '_blank');
        const defaultEmail = "dovestudio@reftek.co";
        window.location.href = `mailto:${defaultEmail}`
    };

    return (
        <>
            <div className={styles.backdrop} onClick={hideModal}></div>
            <div className={styles.modal} >
                <div className={styles.split}>
                    <MdClear className={styles.close} onClick={hideModal} />
                    <motion.button className={styles.btn}
                        onClick={handleComposeEmail}
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        Contact an Architect
                    </motion.button>
                    <motion.button className={styles.btn}
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                        onClick={book}
                    >
                        Schedule an appointment
                    </motion.button>
                </div>
            </div>
            {appointment && <Book book={book} unbook={unbook} />}
        </>
    )
}
export default Modal



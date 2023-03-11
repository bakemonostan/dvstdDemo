import Link from 'next/link';
import Light from '../logo/Light'
import styles from './ComingSoon.module.css'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiIssuu } from 'react-icons/si';
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';




const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');
    const form = useRef();

    useEffect(() => {
        if (msg) {
            const timeoutId = setTimeout(() => {
                setMsg("");
            }, 1500);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [msg]);


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        setEmail(event.target.value);
    };


    const submit = event => {
        event.preventDefault();

        setError(null);

        if (isValidEmail(email)) {
            sendEmail()
            setMsg("Subscription Sent!");
            setEmail('')
        } else {
            setError('Email is invalid');
        }
    };


    const sendEmail = () => {
        emailjs
            .sendForm(
                'service_qtt94gv',
                'template_dh9ojvj',
                form.current,
                'kixxLXmUXmQfveUvo'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <div className={styles.logo}>
                    <Light />
                </div>
                <div className={styles.cta}>
                    <div className={styles.top}>
                        <div></div>
                        <p>Under construction</p>
                    </div>
                    <h1>Coming Soon.</h1>
                    <p className={styles.bottom}>We are almost there, if you want to be notified when the website goes live, subscribe to our mailing list! </p>
                </div>

                <form className={styles.form} onSubmit={submit} ref={form}>
                    {/* {msg && <span className={styles.error}></span>} */}
                    {msg && <motion.span
                        initial={{ scale: 0, opacity: .2 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: .3, duration: .2 }}
                        className={styles.error}
                    >
                        {msg}
                    </motion.span>}

                    <input
                        type="email"
                        placeholder='Email Address'
                        required
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <br />
                    <motion.button
                        type='submit'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >Notify Me!
                    </motion.button>

                </form>
                <div className={styles.footer}>
                    <Link href='https://www.instagram.com/dvstd_/?igshid=NDk5N2NlZjQ%3D'>
                        <FaInstagram />
                    </Link>
                    <Link href='https://www.linkedin.com/company/dvstd/'>
                        <FaLinkedin />
                    </Link>
                    <SiIssuu />

                </div>

            </section>
        </main>
    )
}
export default ComingSoon
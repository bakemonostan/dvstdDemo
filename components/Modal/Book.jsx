import styles from './Modal.module.css'
import { MdClear } from "react-icons/md";



const Book = ({ unbook }) => {

    return (
        <div className={styles.book}>
            <MdClear className={styles.close} onClick={unbook} />
            <form className={styles.form}>
                <div className={styles.name}>
                    <label>Name</label>
                    <input
                        required
                        type='text'
                        name='name'
                        placeholder='Please enter your name'
                    />
                    <label>Email </label>
                    <input
                        required
                        type='text'
                        name='email'
                        placeholder='Please enter your email'
                    />
                </div>

                <div className={styles.date}>
                    <label>Appoinment Date</label>
                    <input
                        required
                        type='date'
                        name='date'
                    />
                    <br />
                    <label>Phone number</label>
                    <input type="tel"
                        name="phone"
                        placeholder='Phone number'
                    />
                </div>

                <button type='submit' className={styles.submit}  >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Book
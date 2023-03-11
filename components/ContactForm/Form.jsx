import styles from './Form.module.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const form = useRef();

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    sendEmail();
    console.log(contactInfo.value);
    setContactInfo({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_qtt94gv',
        'template_2ykgspi',
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
    console.log(form.current);
  };

  return (
    <section className={styles.contact_form}>
      <form className={styles.form} ref={form} onSubmit={submitForm}>
        <h3>Name (Required)</h3>
        <div className={styles.name}>
          <div>
            <input
              required
              type='text'
              name='firstName'
              value={contactInfo.firstName}
              onChange={handleChange}
            />
            <label htmlFor='name'>
              <p>First</p>
            </label>
          </div>

          <div>
            <input
              required
              type='text'
              name='lastName'
              value={contactInfo.lastName}
              onChange={handleChange}
            />
            <label htmlFor='name'>
              <p>Last</p>
            </label>
          </div>
        </div>
        <h3>Email (Required)</h3>
        <input
          required
          type='text'
          name='email'
          value={contactInfo.email}
          onChange={handleChange}
        />
        <h3>Company</h3>
        <input
          required
          type='text'
          name='company'
          value={contactInfo.company}
          onChange={handleChange}
        />
        <br />
        <h3>Message</h3>
        <textarea
          required
          cols='30'
          rows='10'
          name='message'
          onChange={handleChange}
          value={contactInfo.message}
        ></textarea>
        <button type='submit' className={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;

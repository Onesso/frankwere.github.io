import styles from "./ContactStyles.module.css";

function Contact() {
  function submitForm() {
    //document.contact-form.submit();
    document.contact - form.reset();
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        action="https://formsubmit.co/frankwere1965@gmail.com"
        method="POST"
        //target="_blank"
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            id="email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            message
          </label>
          <textarea
            name="Message"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="hover btn" />
      </form>
    </section>
  );
}

export default Contact;

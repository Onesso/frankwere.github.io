import styles from "./FooterStyles.module.css";
import moment from "moment";

function Footer() {
  const now = moment();
  const formatedTime = now.format("MMMM Do YYYY, h:mm:ss a");
  return (
    <section className={styles.container} id="footer">
      <p>
        &copy; Frank Were <br />
        All rights reserved <br /> {formatedTime}
      </p>
    </section>
  );
}

export default Footer;

import React from "react";
import { useRef } from "react";
import styles from "./navigationBarStyles.module.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function navigationBar() {
  const navRef = useRef();

  //below is a function, anytime it is called it will add or remove the classname from the refered tag

  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    console.log("pressed");
  };

  return (
    <>
      <section id="navigationBar" className={styles.container}>
        <header>
          <h3>logo</h3>
          <nav className={styles.navigation} ref={navRef}>
            <Link to="projects" duration={1000} smooth={true}>
              Projects
            </Link>
            <Link to="Skills" duration={1000} smooth={true}>
              Skills
            </Link>
            <Link to="contact" duration={1000} smooth={true} >
              Contact
            </Link>
           
            <button className={styles.closeBtn} onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className={styles.openBtn} onClick={showNavBar}>
            <FaBars />
          </button>
        </header>
      </section>
    </>
  );
}

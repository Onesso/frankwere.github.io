import React from "react";
import { useRef } from "react";
import styles from "./NavbarStyles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_bar);
  };

  return (
    <>
      <div id="Navbar" className={styles.container}>
        <header className={styles.Kichwa}>
          <nav className={styles.manavs} ref={navRef}>
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">Contacts</a>
            <a href="">Blog</a>
            <button className={styles.nav_btn} onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className={styles.nav_btn_bars} onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
}

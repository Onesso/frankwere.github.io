import React from "react";
import { useRef } from "react";
import classNames from "classnames";
import styles from "./NavbarStyles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_bar);
  };

  return (
    <>
      <section id="Navbar" className={styles.container}>
        <header>
          <button onClick={showNavbar}>
            <FaBars />
          </button>

          <nav ref={navRef}>
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">Contacts</a>
            <a href="">Blog</a>
            <button className={styles.nav_btn} onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </header>
      </section>
    </>
  );
}

import React from "react";
import styles from "./HeroStyles.module.css";

import profile from "../../assets/profile11.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xIconlight from "../../assets/twitter-light.svg";
import xIconDark from "../../assets/twitter-dark.svg";
import githubIconlight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedinIconlight from "../../assets/linkedin-light.svg";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const xIcon = theme === "light" ? xIconlight : xIconDark;
  const githubIcon = theme === "light" ? githubIconlight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconlight : linkedinIconDark;

  console.log("Current theme:", theme); // Debugging line to check current theme

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className={styles.hero}
            //src={heroimg}
            src={profile}
            alt="profile image of Frank were"
          />

          <img
            onClick={toggleTheme}
            className={styles.colorMode}
            src={themeIcon}
            alt="color mode icon"
          />
        </div>


        <div className={styles.info}>
          <h1>
            Frank <br /> Were
          </h1>
          <h2>Fullstack Developer</h2>
          <span>
            <a
              href="https://x.com/FrankOdhis1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="x icon" />
            </a>
            <a
              href="https://github.com/Onesso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/frank-were-707780232/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion of developing enterprise applications with React and
            Django
          </p>
          <a href={cv} download>
            <button className="hover">Resume</button>
          </a>
        </div>

    </section>
  );
}

export default Hero;

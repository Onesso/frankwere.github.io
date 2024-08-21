import styles from "./ProjectsStyle.module.css";
import viber from "../../assets/viberr.png";
import freshburger from "../../assets/fresh-burger.png";
import fitlift from "../../assets/fitlift.png";
import hipsster from "../../assets/hipsster.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link="https://fact-blog.vercel.app/"
          h3="Viber"
          p="Streaming app"
        />
        <ProjectCard
          src={freshburger}
          link="https://fact-blog.vercel.app/"
          h3="Fresh Burger"
          p="Hamburger restaurant"
        />
        <ProjectCard
          src={fitlift}
          link="https://fact-blog.vercel.app/"
          h3="Viber"
          p="Streaming app"
        />
        <ProjectCard
          src={hipsster}
          link="https://fact-blog.vercel.app/"
          h3="Viber"
          p="Streaming app"
        />
      </div>
    </section>
  );
}

export default Projects;

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
          h3="Blog"
          p="Fact-blog"
        />
        <ProjectCard
          src={freshburger}
          link="https://github.com/Onesso/Ecommerce-project-client-side"
          h3="e-biashara"
          p="online bookstore"
        />
        <ProjectCard
          src={fitlift}
          link="https://github.com/Onesso/mpesa_stkpush"
          h3="Mpesa"
          p="stk Push"
        />
        <ProjectCard
          src={hipsster}
          link="https://onesso.github.io/tour-destination/"
          h3="Discover"
          p="Hidded gems app"
        />
      </div>
    </section>
  );
}

export default Projects;

import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";
import SkillsList from "../../common/SkillsList";

function Skills() {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.SkillList}>
        <SkillsList src={checkMarkIcon} skill={"Html"} />
        <SkillsList src={checkMarkIcon} skill={"css"} />
        <SkillsList src={checkMarkIcon} skill={"Javascript"} />
        <SkillsList src={checkMarkIcon} skill={"React.js"} />
        <SkillsList src={checkMarkIcon} skill={"Next.js"} />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillsList src={checkMarkIcon} skill={"express"} />
        <SkillsList src={checkMarkIcon} skill={"mongo DB"} />
        <SkillsList src={checkMarkIcon} skill={"Django"} />
        <SkillsList src={checkMarkIcon} skill={"Sql"} />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillsList src={checkMarkIcon} skill={"Redux"} />
        <SkillsList src={checkMarkIcon} skill={"Git"} />
        <SkillsList src={checkMarkIcon} skill={"Boostrap"} />
        <SkillsList src={checkMarkIcon} skill={"Ant Design"} />
        <SkillsList src={checkMarkIcon} skill={"NativeWind"} />
      </div>
    </section>
  );
}

export default Skills;

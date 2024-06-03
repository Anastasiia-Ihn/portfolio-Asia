import css from "./Skills.module.css";

const Skills = ({ skillsRef }) => {
  return (
    <>
      <section className={css.section}>
        <span className={"scroll_mark"} ref={skillsRef}></span>
        <h2>Skills</h2>
      </section>
    </>
  );
};

export default Skills;
 
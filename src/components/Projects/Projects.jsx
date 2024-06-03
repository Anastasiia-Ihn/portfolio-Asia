import css from "./Projects.module.css";

const Projects = ({ projectsRef }) => {
  return (
    <>
      <section className={css.section}>
        <span className={"scroll_mark"} ref={projectsRef}></span>
        <h2>Projects</h2>
      </section>
    </>
  );
};

export default Projects;

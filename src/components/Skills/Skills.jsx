import css from "./Skills.module.css";
import Languages from "../Languages/Languages";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
const Skills = ({ skillsRef }) => {
  return (
    <>
      <section className={css.section}>
        <span className={"scroll_mark"} ref={skillsRef}></span>
        <h2>Skills</h2>
        <h3>Tech Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React Hooks & Components</li>
          <li> Redux-Toolkit</li>
          <li>REST API</li>
          <li> Express.js</li>
          <li> MongoDB</li>
          <li>MariaDB</li>
          <li>Docker</li>
          <li>GIT</li>
          <li> Parcel, Webpack, Vite</li>
        </ul>

        <h3>Soft Skills </h3>
        <ul>
          <li>teamwork</li>
          <li>Scrum</li>
          <li>reliability</li>
          <li> logical thinking</li>
          <li>organizational skills</li>
          <li> time management</li>
          <li> work ethic</li>
        </ul>
        <Languages />
        <Education />
        <Experience />
      </section>
    </>
  );
};

export default Skills;

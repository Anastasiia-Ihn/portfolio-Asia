import css from "./Skills.module.css";
import Languages from "../Languages/Languages";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SoftSkills from "../SoftSkills/SoftSkills";
import TechSkills from "../TechSkills/TechSkills";

const Skills = ({ skillsRef }) => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className={css.section}>
        <span className={"scroll_mark"} ref={skillsRef}></span>
        <h2 className="visible-hidden">My skills</h2>
        <ul className={css.list}>
          <li data-aos="zoom-in">
            <SoftSkills />
          </li>
          <li data-aos="zoom-in">
            <TechSkills />
          </li>
          <li data-aos="zoom-in-down">
            <Languages />
          </li>
          <li data-aos="zoom-in-down">
            <Education />
          </li>
          <li data-aos="zoom-in-down">
            <Experience />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;

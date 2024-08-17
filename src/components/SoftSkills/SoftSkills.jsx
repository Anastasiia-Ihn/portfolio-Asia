import { useEffect } from "react";
import css from "./SoftSkills.module.css";
import aos from "aos";
const SoftSkills = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <h3>I have soft skills such as </h3>
      <ul className={css.list}>
        <li>Teamwork</li>
        <li>Scrum</li>
        <li>Organizational skills</li>
        <li>Work ethic</li>
        <li>Reliability</li>
        <li>Logical thinking</li>
        <li>Time management</li>
        <li>Self-motivation</li>
      </ul>
    </>
  );
};

export default SoftSkills;

import { DiJavascript1 } from "react-icons/di";
import { LiaReact } from "react-icons/lia";
import { FaNode, FaGithub, FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb, SiMariadbfoundation, SiPostgresql } from "react-icons/si";
import css from "./TechSkills.module.css";
const TechSkills = () => {
  return (
    <>
      <h3>and in my work I use</h3>
      <ul className={css.list}>
        <li>
          <DiJavascript1 />
          JavaScript
        </li>
        <li>
          <LiaReact />
          React
        </li>
        <li>
          <FaNode />
          Node.js + Express.js
        </li>
        <li>React Hooks & Components</li>
        <li>
          <TbBrandRedux />
          Redux
        </li>
        <li>REST API</li>
        <li> Express.js</li>
        <li>
          <SiMongodb />
        </li>
        <li>
          <SiMariadbfoundation />
        </li>
        <li>
          <SiPostgresql />
        </li>
        <li>Docker</li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>Parcel, Webpack, Vite</li>
      </ul>
    </>
  );
};

export default TechSkills;

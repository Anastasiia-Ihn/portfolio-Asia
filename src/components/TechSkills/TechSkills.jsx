import css from "./TechSkills.module.css";

const list = [
  "JavaScript",
  "React.js",
  "Node.js + Express.js",
  "Redux",
  "React Hooks & Components",
  "REST API",
  "MongoDB",
  "MariaDB",
  "Postgresql",
  "Docker",
  "Github",
  "Git ",
  "Parcel, Webpack, Vite",
];
const TechSkills = () => {
  return (
    <>
      <h3>and in my work I use</h3>
      <ul className={css.list}>
        {list.map((el) => (
          <li key={el} className={css.item}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default TechSkills;

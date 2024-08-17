import css from './Experience.module.css'

const Experience = () => {
  return (
    <div>
      <h3>Work experience</h3>
      <ul className={css.list}>
        <li>
          <a
            className={css.link}
            href="https://baza-trainee.tech/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baza Trainee Ukraine
          </a>
          <span className={css.date}>since march 2024</span> Fullstack developer
        </li>
      </ul>
    </div>
  );
};

export default Experience;

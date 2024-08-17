import css from "./Education.module.css";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <ul className={css.list}>
        <li>
          <a
            className={css.link}
            href="https://int.sumdu.edu.ua/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sumy State University:
          </a>
          <ul>
            <li>
              <span className={css.date}>2019 - 2024</span> Postgraduate student
              of Philosophy in Economics
            </li>
            <li>
              <span className={css.date}>2016 - 2018</span> Master's degree in
              Finance and Credit
            </li>
          </ul>
        </li>

        <li>
          <a
            className={css.link}
            href="https://goit.global/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IT School GoIT:
          </a>
          <ul>
            <li>
              <span className={css.date}>2023 - 2024</span> Fullstack Developer
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Education;

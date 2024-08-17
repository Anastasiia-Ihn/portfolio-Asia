import { ReactComponent as En } from "../../images/svg-color/en.svg";
import { ReactComponent as Ua } from "../../images/svg-color/ua.svg";
import { ReactComponent as Pl } from "../../images/svg-color/pl.svg";
import { ReactComponent as Ru } from "../../images/svg-color/ru.svg";
import css from "./Languages.module.css";
const Languages = () => {
  return (
    <div>
      <h3>Languages</h3>
      <ul className={css.list}>
        <li>
          <En className={css.flag} />
          English - Pre-Intermediate
        </li>
        <li>
          <Pl className={css.flag} />
          Polish - Pre-Intermediate
        </li>
        <li>
          <Ua className={css.flag} />
          Ukrainian - Native
        </li>
        <li>
          <Ru className={css.flag} />
          Russian - Fluent
        </li>
      </ul>
    </div>
  );
};

export default Languages;

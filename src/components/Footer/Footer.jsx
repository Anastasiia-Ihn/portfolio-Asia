import Contacts from "../Contacts/Contacts";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.sectionFooter}>
      <Contacts/>
      <p className={css.text}>Created by Asia Ihnatchenko</p>
    </footer>
  );
};

export default Footer;

import { LiaReact } from "react-icons/lia";
import Contacts from "../Contacts/Contacts";
import { Icon } from "../Icon";
import css from "./Footer.module.css";

const Footer = ({ contactsRef }) => {
  return (
    <footer className={css.sectionFooter}>
      <span className={"scroll_mark"} ref={contactsRef}></span>
      <h3>Let's work together. </h3>
      {/* <p>
        I'm available for interview at any time and await your response with
        much anticipation.
      </p> */}
      <Contacts />
      <p className={css.text}>
        Built with
        <Icon
          className={css.icon}
          stroke="red"
          fill="#db0707"
          name="heart"
          width="35"
          height="35"
        />
        by Asia Ihnatchenko using{" "}
        <LiaReact className={css.icon} color="#4881b1" size="35" />
      </p>
    </footer>
  );
};

export default Footer;

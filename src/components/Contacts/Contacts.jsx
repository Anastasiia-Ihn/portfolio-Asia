import { FiGithub, FiLinkedin, FiPhoneCall, FiMail } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import css from "./Contacts.module.css";
const Contacts = () => {
  return (
    <div>
      <h3> I'm available to contact.</h3>
      <ul className={css.list}>
        <li>
          <a
            href="https://t.me/Asia_Ihnatchenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTelegram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anastasiia-ihnatchenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Anastasiia-Ihn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="tel:+48731332697">
            <FiPhoneCall />
          </a>
        </li>
        <li>
          <a href="mailto:stasia.imb@gmail.com">
            <FiMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;

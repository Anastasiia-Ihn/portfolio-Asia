import { useState, useEffect } from "react";

import css from "./Header.module.css";
import logo from "./logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Link from "../Link/Link";

const Header = ({ list, idPreview }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        return setIsMobile(true);
      }
    };

    const handleFixHeader = () => {
      if (document.documentElement.scrollTop > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleFixHeader);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleFixHeader);
    };
  }, []);

  return (
    <header
      className={isSticky ? `${css.header} ${css.isSticky}` : `${css.header}`}
    >
      <div className={css.containerForLogo}>
        <a href="/">
          <img src={logo} alt="Logo" height={64} />
        </a>
        <p className={css.name}>Anastasiia Ihnatchenko</p>
      </div>
      {isMobile ? (
        <BurgerMenu list={list} idPreview={idPreview} />
      ) : (
        <ul className={css.list}>
          {list.map(({ id, ...rest }) => (
            <Link key={id} id={id} idPreview={idPreview} {...rest} />
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;

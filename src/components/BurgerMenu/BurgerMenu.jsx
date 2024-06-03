import { useState } from "react";
import css from "./BurgerMenu.module.css";
import Link from "../Link/Link";
import icons from "../../sprite.svg";

const BurgerMenu = ({ list, idPreview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <>
          <button type="button" onClick={toggleMenu}>
            <svg className={css.burgerMenu_icon} width="25" height="29">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
          <div className={css.content}>
            <ul className={css.list}>
              {list.map(({ id, ...rest }) => (
                <Link
                  key={id}
                  closeMenu={toggleMenu}
                  idPreview={idPreview}
                  {...rest}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <button type="button" onClick={toggleMenu}>
          <svg className={css.burgerMenu_icon} width="25" height="29">
            <use href={`${icons}#icon-burger`}></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default BurgerMenu;

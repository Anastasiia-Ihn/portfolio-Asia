import { useState } from "react";
import css from "./ReturnBtn.module.css";
import { FiArrowUp } from "react-icons/fi";

const ReturnBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={isVisible ? css.scrollToTopBtnActive : css.scrollToTopBtn}
        type="button"
      >
        <FiArrowUp />
      </button>
    </>
  );
};

export default ReturnBtn;

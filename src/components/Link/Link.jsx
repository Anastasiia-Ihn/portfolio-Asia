import css from "./Link.module.css";

const Link = ({ name, link, id, closeMenu, idPreview }) => {
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      closeMenu();
    }
    link();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`${css.link} ${
          idPreview === id ? css.active : css.default
        } `}
      >
        {name}
      </button>
    </li>
  );
};

export default Link;

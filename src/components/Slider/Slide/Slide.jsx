import css from "./Slide.module.css";
const Slide = ({ item }) => {
  const { name, link, img, utilities } = item;
  return (
    <div className={css.slide}>
      <div className={css.wrapper}>
        <img className={css.image} src={img} alt={name} />
      </div>
      <div className={css.content}>
        <a href={link}>Open site</a>
        <ul className={css.list}>
          {utilities?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;

import css from "./About.module.css";

const About = ({ aboutRef }) => {
  return (
    <section className={css.section}>
      <span className={"scroll_mark"} ref={aboutRef}></span>
      <h2>About me</h2>
    </section>
  );
};

export default About;

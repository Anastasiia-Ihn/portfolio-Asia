import { useEffect } from "react";
import aos from "aos";
import css from "./About.module.css";

const About = ({ aboutRef }) => {
   useEffect(() => {
     aos.init();
   }, []);
  return (
    <section data-aos="zoom-in" className={css.section}>
      <span className={"scroll_mark"} ref={aboutRef}></span>
      <h2>About me</h2>
      <p>
        Passionate Front-End JavaScript Developer with experience in building
        responsive and interactive web applications. I have been working as a
        part-time full-stack programmer at Baza Trainee Ukraine for 5 months.
        Experienced in optimizing performance, ensuring accessibility, and
        working collaboratively in team environments. Eager to contribute to
        innovative projects and continue learning in a dynamic development team.
      </p>
    </section>
  );
};

export default About;

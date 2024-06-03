import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
          <h2 className={styles.title}>Hi, there!</h2>
          <p className={styles.text}>
          I am a junior full-stack developer</p>
        </div>
    </section>
  );
};

export default Hero;

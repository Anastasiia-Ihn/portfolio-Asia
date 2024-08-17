import styles from "./Hero.module.css";
import image from "../../images/image-without-bg.png";

const Hero = () => {
  return (
    <>
      <h1 className="visible-hidden">My portfolio</h1>
      <section className={styles.hero}>
        <img src={image} className={styles.image} alt="my"  />
        <div className={styles.container}>
          <h2 className={styles.title}>Hi, there!</h2>
          <p className={styles.text}>
            I am a junior full-stack developer currently seeking new
            opportunities for my personal and professional growth.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

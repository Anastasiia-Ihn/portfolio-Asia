import { motion } from "framer-motion";
import css from './AnimatedIntro.module.css'

const containerStyles = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const textStyles = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const AnimatedIntro = () => {
  return (
    <main className={css.container}>
      <section className={css.section}>
        <motion.div
          className={css.introContainer}
          variants={containerStyles}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={css.header} variants={textStyles}>
            Welcome to my site
          </motion.h1>
          <div className={css.wrapper}>
            <div className={`${css.line} ${css.left}`} />
            <div className={`${css.line} ${css.right}`} />
          </div>
          <motion.p variants={textStyles} style={{ transitionDelay: "0.5s" }}>
            I am Anastasiia Ihnatchenko
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
};

export default AnimatedIntro;

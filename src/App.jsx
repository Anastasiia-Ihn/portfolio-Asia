import { useEffect, useRef, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ReturnBtn from "./components/ReturnBtn/ReturnBtn";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import AnimatedIntro from "./components/AnimatedIntro/AnimatedIntro";
import { motion } from "framer-motion";

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

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const [currentSection, setCurrentSection] = useState("");
  const [previewSection, setPreviewSection] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setSectionId(dataHeader[0].id);
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
    setSectionId(dataHeader[1].id);
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    setSectionId(dataHeader[2].id);
  };

  const scrollToContacts = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
    setSectionId(dataHeader[3].id);
  };

  const setSectionId = (sectionId) => {
    setPreviewSection(sectionId);
    setCurrentSection(currentSection);
  };

  const dataHeader = [
    {
      id: 0,
      name: "About me",
      link: scrollToAbout,
    },
    {
      id: 1,
      name: "Skills",
      link: scrollToSkills,
    },
    {
      id: 2,
      name: "Projects",
      link: scrollToProjects,
    },
    {
      id: 3,
      name: "Contacts",
      link: scrollToContacts,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <AnimatedIntro />
      ) : (
        <motion.div
          variants={containerStyles}
          initial="hidden"
          animate="visible"
        >
          <Header list={dataHeader} idPreview={previewSection} />
          <main>
            <Hero />
            <About aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectsRef={projectsRef} />
          </main>
          <Footer contactsRef={contactsRef} />
          <ReturnBtn />
        </motion.div>
      )}
    </>
  );
};

export default App;

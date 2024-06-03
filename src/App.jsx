import { useRef, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ReturnBtn from "./components/ReturnBtn/ReturnBtn";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const [currentSection, setCurrentSection] = useState("");
  const [previewSection, setPreviewSection] = useState("");

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader[0].id);
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader[1].id);
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    SectionId(dataHeader[2].id);
  };

  const SectionId = (sectionId) => {
    setPreviewSection(sectionId);
    setCurrentSection(currentSection);
  };

  const dataHeader = [
    {
      id: 1,
      name: "About me",
      link: scrollToAbout,
    },
    {
      id: 2,
      name: "Skills",
      link: scrollToSkills,
    },
    {
      id: 3,
      name: "Projects",
      link: scrollToProjects,
    },
  ];

  return (
    <>
      <Header list={dataHeader} idPreview={previewSection} />
      <Hero />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
      <ReturnBtn />
    </>
  );
};

export default App;

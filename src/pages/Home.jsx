import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <AboutMe />
    </div>
  );
};

export default Home;

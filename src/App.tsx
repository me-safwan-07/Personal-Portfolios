import About from "./sections/About"  
import { Skill } from "./sections/Skill"
import {GithubStats} from "./sections/GithubStats"
import { Projects } from "./sections/Projects"
import { HeroSection } from "./sections/Hero"
import { Footer } from "./sections/FooterSection"
import Navbar from "./sections/Navbars"
import Contact from "./sections/Contact"

const App = () => {
  const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <>
          <Navbar scrollToSection={scrollToSection}/>  
          <div id="hero-section">
              <HeroSection />
          </div>
          <div id="about-section">
              <About />
          </div>
          <div id="skills-section">
              <Skill />
          </div>
          <div id="github-stats-section">
              <GithubStats />
          </div>
          <div id="projects-section">
              <Projects />
          </div>
          <div id="contact-section">
              <Contact />
          </div>
          <div id="footer-section">
              <Footer />
          </div>
      </>
  );
};

export default App
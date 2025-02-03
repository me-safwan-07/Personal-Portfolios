import About from "./sections/About"  
import { Skill } from "./sections/Skill"
import {GithubStats} from "./sections/GithubStats"
import { Projects } from "./sections/Projects"
import { HeroSection } from "./sections/Hero"


const App = () => {
  return (
    <>  
      <HeroSection />
      <About />
      <Skill />
      <GithubStats /> 
      <Projects />
    </>

  )
}

export default App
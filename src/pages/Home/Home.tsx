import { Footer, NavigationBar } from "../../components";
import { About, Experience, Hero, Projects, TechCards } from "./components";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <NavigationBar />

      <Hero />

      <div className="md:px-30 px-5">
        <About />
        <Experience />
        <TechCards />
        <Projects />
      </div>

      <Footer />
    </>
  );
};

export default Home;

import { useEffect } from "react";
import { Footer } from "../../components";
import { homeText, scrambleTextRoles } from "../../constants";
import { Experience, MovableObject, Projects, TechCards } from "./components";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    gsap.fromTo(
      "#intro-text",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      "#name-text",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      "#actual-role-text",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
        scrambleText: {
          text: scrambleTextRoles[0],
          chars: "upperCase",
          speed: 0.5,
        },
      }
    );
    scrambleTextRoles.forEach((role) => {
      tl.to(
        "#actual-role-text",
        {
          scrambleText: {
            text: role,
            chars: "upperCase",
            speed: 0.5,
          },
          duration: 2,
        },
        "+=1"
      );
    });
    gsap.fromTo(
      "#about-text",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        delay: 1.5,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <div className="py-30 m-10 sm:mb-20 md:mb-50">
        <div className="lg:w-2/3">
          <p id="intro-text">{homeText.introduction}</p>
          <h1
            id="name-text"
            className="uppercase lg:text-5xl text-3xl lg:mt-5 font-bold text-neutral-50"
          >
            {homeText.name}
          </h1>
          <h1
            id="actual-role-text"
            className="lg:text-5xl text-3xl bg-gradient-to-r from-pink-300 to-purple-500 lg:py-5 via-slate-500 text-transparent bg-clip-text"
          >
            {homeText.role}
          </h1>
          <p
            id="about-text"
            className="lg:w-3/4 mt-5 leading-relaxed text-justify text-2xl"
          >
            {homeText.about}
          </p>
        </div>

        <MovableObject />
      </div>

      <div className="lg:px-30 px-5">
        <Experience />
        {/* <TechCards /> */}
        <Projects />
      </div>

      <Footer />
    </>
  );
};

export default Home;

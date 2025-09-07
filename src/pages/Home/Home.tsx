import { useEffect } from "react";
import { Footer } from "../../components";
import { homeText, scrambleTextRoles } from "../../constants";
import { Experience, Projects } from "./components";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiCarWheel } from "react-icons/gi";

const Home = () => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1});
    gsap.fromTo(
        '#intro-text',
        { opacity: 0, x: -20},
        {
            opacity: 1,
            x: 0,
            delay: 0.2,
            duration: 1.5,
            ease: "power3.out",
        }
    );
    gsap.fromTo(
        '#name-text',
        { opacity: 0, x: -20},
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
            speed: 0.5
            }
        }
    );
    scrambleTextRoles.forEach((role) => {
      tl.to("#actual-role-text", {
        scrambleText: {
          text: role,
          chars: "upperCase",
          speed: 0.5
        },
        duration: 2
      }, "+=1");
    });
    gsap.fromTo(
        '#about-text',
        { opacity: 0, x: -20},
        {
            opacity: 1,
            x: 0,
            delay: 1.5,
            duration: 1.5,
            ease: "power3.out",
        }
    );
    gsap.fromTo(
        "#wheel-icon",
        { opacity: 0, rotation: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          rotation: 1440,
          ease: "none",
          scrollTrigger: {
            trigger: "#wheel-icon",
            start: "top 80%",
            end: "+=1200",
            scrub: true,
            // markers: true
          }
        }
      );
  }, []);

  return (
    <div>
      <div className="py-30 m-10 flex pb-24">
        <div className="w-2/3">
          <p id='intro-text'>{homeText.introduction}</p>
          <h1 id='name-text' className="uppercase text-5xl mt-5 font-bold text-neutral-50">
            {homeText.name}
          </h1>
          <h1
            id="actual-role-text"
            className="bg-gradient-to-r from-pink-300 to-purple-500 text-5xl mt-5 via-slate-500 text-transparent bg-clip-text"
          >
            {homeText.role}
          </h1>
          <p id='about-text' className="w-3/4 mt-10 leading-relaxed text-justify text-2xl">
            {homeText.about}
          </p>
        </div>

        <div className="justify-center items-center">
          <img src="" className="w-130 h-130 rounded-full bg-amber-300" />
          <GiCarWheel id='wheel-icon' className="w-130 h-130" color="white" />
        </div>
      </div>

      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

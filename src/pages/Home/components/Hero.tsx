import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { homeText, scrambleTextRoles } from "../../../constants";
import { gsap } from "gsap";

const Hero = () => {
  const openGithubUrl = () => {
    window.open("https://github.com/hamadalhibshi", "_blank");
  };

  const openLinkedinUrl = () => {
    window.open("https://www.linkedin.com/in/halhibshi/", "_blank");
  };

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
      "#role-container",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 1,
        ease: "power3.out",
      }
    );
    scrambleTextRoles.forEach((role) => {
      tl.to("#actual-role-text", {
        scrambleText: {
          text: role,
          chars: "upperCase",
          speed: 0.5,
        },
        duration: 2,
      });
      tl.to({}, { duration: 2 });
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
    gsap.fromTo(
      "#icons",
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
    <div
      className="z-10 text-center py-30 m-5 mb-50 
      md:mb-50 md:m-10"
    >
      <p id="intro-text" className="text-[13px] md:text-sm">
        {homeText.introduction}
      </p>
      <h1
        id="name-text"
        className="uppercase text-xl md:text-5xl md:mt-5 font-bold text-neutral-50"
      >
        {homeText.name}
      </h1>

      <div className="w-full flex flex-col items-center" id="role-container">
        <h1
          id="actual-role-text"
          className="md:text-8xl md:py-5 
          text-3xl bg-gradient-to-r from-pink-300 to-purple-500 via-slate-500 text-transparent bg-clip-text"
        >
          {homeText.role}
        </h1>
        <div
          className="w-2/5 border-2 rounded-2xl border-purple-900 mt-5
          md:my-5 md:w-1/5 md:border-4"
        />
      </div>

      <div className="w-full flex justify-center">
        <p
          id="about-text"
          className="mt-5 leading-relaxed text-center text-[19px] 
          md:text-2xl md:w-1/3"
        >
          {homeText.about}
        </p>
      </div>

      <div
        className="mt-5 flex justify-center items-center gap-5
        md:gap-10 md:mt-10"
        id="icons"
      >
        <button
          onClick={openGithubUrl}
          className={"rounded-lg cursor-none hover:opacity-50"}
        >
          <FaGithub className="w-[30px] h-[30px]" />
        </button>

        <button
          onClick={openLinkedinUrl}
          className={"rounded-lg cursor-none hover:opacity-50"}
        >
          <FaLinkedin className="w-[30px] h-[30px]" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { useEffect } from "react";
import { experiences } from "../../../constants";
import { gsap } from "gsap";

const Experience = () => {
  useEffect(() => {
    gsap.utils.toArray("#dates").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -120, skewX: -10, rotationY: -30 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          rotationY: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
    gsap.utils.toArray("#info").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 120, skewX: 10, rotationY: 30 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          rotationY: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
    gsap.fromTo(
      "#title-text",
      { opacity: 0, y: -80, scale: 0.8, rotationX: 45, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        skewY: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#title-text",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="pb-24">
      <h1 id="title-text" className="my-20 text-4xl text-center">
        Experience
      </h1>

      {experiences.map((exp, index) => (
        <div key={index} className="flex mb-8 flex-wrap justify-center">
          <div id="dates" className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{exp.date}</p>
          </div>
          <div id="info" className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{`${exp.role} - ${exp.company}`}</h6>
            <p className="mb-4">{exp.description}</p>
            {exp.tech.map((tech, index) => (
              <span
                key={index}
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

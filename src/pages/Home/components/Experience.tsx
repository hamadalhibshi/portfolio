import { useEffect } from "react";
import { experiences, titles } from "../../../constants";
import { gsap } from "gsap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  useEffect(() => {
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
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="pb-24">
      <h1 id="title-text" className="my-20 text-4xl text-center">
        {titles.experience}
      </h1>

      <VerticalTimeline>
        {experiences.map((exp, index: number) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#171717", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={exp?.date}
            iconStyle={{ background: "#171717", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={exp.logo}
                  className="w-[60%] object-contain rounded-full"
                />
              </div>
            }
          >
            <div className="flex mb-8 flex-wrap justify-center">
              <div className="w-full max-w-xl">
                <h6 className="font-semibold">{exp?.role}</h6>
                <span className="font-semibold text-sm text-neutral-500 block">
                  {exp?.company}
                </span>
                <ul className="list-disc mt-5 ml-5 space-y-2">
                  {exp?.description?.map((desc, index) => (
                    <li key={index} className="text-[14px]">
                      {desc.point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap justify-start">
                  {exp?.tech.map((tech, index: number) => (
                    <span
                      key={index}
                      className="rounded px-2 py-1 sm:px-1 sm:py-0.5 mr-2 mb-2 text-sm font-medium text-purple-800 break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

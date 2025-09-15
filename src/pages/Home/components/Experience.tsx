import { experiences, titles } from "../../../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Title } from "../../../components";

const Experience = () => {
  return (
    <div className="pb-24">
      <Title text={titles.experience} center />

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
            <div className="flex flex-wrap justify-center">
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

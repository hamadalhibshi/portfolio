import { useEffect } from "react";
import { projects, titles } from "../../../constants";
import { gsap } from "gsap";

const Projects = () => {
  useEffect(() => {
    gsap.utils.toArray("#image").forEach((el: any) => {
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
    gsap.utils.toArray("#project-title").forEach((el: any) => {
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
    gsap.utils.toArray("#description").forEach((el: any) => {
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
    gsap.utils.toArray("#project-tech").forEach((el: any) => {
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
      "#title",
      { opacity: 0, y: -80, scale: 0.8, rotationX: 45, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        skewY: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#title",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  const renderView = (projects: any) => {
    return (
      <>
        {projects.map((project: any, index: number) => {
          const isOdd = project.id % 2 !== 0;

          return (
            <div
              key={index}
              className="flex mb-8 flex-wrap justify-center items-center"
            >
              {!isOdd && (
                <div id="image" className="w-full lg:w-130 lg:h-80">
                  <img
                    className="mb-2 w-full h-full rounded-sm"
                    src={project.img}
                  />
                </div>
              )}

              <div className={`lg:w-2/5 ${isOdd ? "lg:-mr-20" : "lg:-ml-20"}`}>
                <h6
                  id="project-title"
                  className={`mb-5 font-semibold ${
                    isOdd ? "text-start" : "text-end"
                  } text-2xl`}
                >
                  {project.title}
                </h6>
                <div
                  id="description"
                  className="w-full h-50 bg-neutral-900 p-5 rounded-sm relative z-10"
                >
                  <p className="mb-4">{project.description}</p>
                </div>

                <div
                  id="project-tech"
                  className={`w-full mt-5 flex ${
                    isOdd ? "justify-start" : "justify-end"
                  }`}
                >
                  {project.tech.map((tech: any, index: number) => (
                    <span
                      key={index}
                      className={`${
                        isOdd ? `mr-2` : `ml-2`
                      } rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {isOdd && (
                <div id="image" className="w-full lg:w-130 lg:h-80">
                  <img
                    className="mb-2 w-full h-full rounded-sm"
                    src={project.img}
                  />
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 id="title" className="my-20 text-4xl text-center">
        {titles.projects}
      </h1>
      {renderView(projects)}
    </div>
  );
};

export default Projects;

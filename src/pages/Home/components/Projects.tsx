import { useEffect } from "react";
import { projects, titles } from "../../../constants";
import { gsap } from "gsap";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";

const Projects = () => {
  useEffect(() => {
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
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#project-card",
      { opacity: 0, y: -80, scale: 0.8, rotationX: 45, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        skewY: 0,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#project-card",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  }, []);

  const navigateToRepo = (link: URL) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-24">
      <h1 id="title" className="my-20 text-4xl text-center">
        {titles.projects}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: any, index: number) => (
          <Tilt key={index}>
            <button
              id="project-card"
              className="bg-neutral-900 rounded-2xl overflow-hidden duration-300"
              onClick={() => navigateToRepo(project.link)}
            >
              <div className="h-50 w-full overflow-hidden relative group">
                <div
                  className="absolute right-[5%] top-[5%] z-10 bg-neutral-800 rounded-full p-2 
                transform transition-transform duration-300"
                >
                  <FaGithub className="text-white" size={20} />
                </div>

                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h1 className="font-bold text-lg text-white truncate text-left">
                  {project.title}
                </h1>
                <p className="text-sm text-neutral-400 mt-2 line-clamp-3 text-left">
                  {project.description}
                </p>
              </div>
            </button>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;

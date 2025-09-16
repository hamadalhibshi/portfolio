import { useEffect } from "react";
import { Button, Title } from "../../../components";
import {
  aboutBoxes,
  aboutDescriptions,
  images,
  titles,
} from "../../../constants";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      "#profile-img",
      { opacity: 0, scale: 0.8, rotationX: 45 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#profile-img",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#description",
      { opacity: 0, scale: 0.8, rotationX: 45 },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#description",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  }, []);

  const handleDownloadCv = () => {
    window.open(
      "https://docs.google.com/document/d/1omk7rQeh9BmvpnFFQpTocpPQl-Das0x_/export?format=pdf&ouid=105909076522157103100&rtpof=true&sd=true",
      "_blank"
    );
  };

  return (
    <div className="pb-24 md:pb-50">
      <Title text={titles.about} center />

      <div className="flex justify-evenly flex-wrap items-center">
        <div id="profile-img" className="justify-center order-1 md:order-2">
          <img
            src={images.profile}
            alt="profile"
            className="w-full h-[450px] border-4 border-neutral-800 rounded-2xl
      md:w-[450px] md:h-full"
          />
        </div>

        <div
          id="description"
          className="md:w-2/5 md:mt-0 order-2 md:order-1 py-10 md:py-0"
        >
          {aboutDescriptions.map((desc, index) => (
            <p
              className="mb-10 leading-relaxed text-justify text-[15px] md:text-[18px]"
              key={index}
            >
              {desc}
            </p>
          ))}

          <div className="flex justify-evenly md:mt-20">
            {aboutBoxes.map((about, index) => (
              <div key={index}>
                <h1 className="text-[20px] md:text-2xl font-bold text-center text-purple-800">
                  {about.number}
                </h1>
                <span className="text-[12px] md:text-sm text-neutral-500">
                  {about.title}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-10">
            <Button onClick={handleDownloadCv}>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

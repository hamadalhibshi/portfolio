import { useEffect, useRef } from "react";
import { techCardsConst, titles } from "../../../constants";
import { gsap } from "gsap";

const TechCards = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      "#tech-card",
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
          trigger: "#tech-card",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: -10 },
        {
          y: 10,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        }
      );
    });
  }, []);

  return (
    <div className="py-24">
      <h1 id="title" className="mb-20 text-4xl text-center">
        {titles.technologies}
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {techCardsConst.map((tech, index) => (
          <div
            key={index}
            id="tech-card"
            ref={(el) => (cardsRef.current[index] = el!)}
            className="h-[100px] w-[100px] 
                 md:h-[120px] md:w-[120px] 
                 lg:h-[140px] lg:w-[140px]
                 rounded-2xl flex justify-center items-center border"
          >
            <div
              className="h-[50%] w-[50%] 
            md:h-[60%] md:w-[60%]"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCards;

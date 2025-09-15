import { useEffect, useRef } from "react";
import type { TitleProps } from "../types";
import { gsap } from "gsap";

const Title = ({ text, right, center }: TitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -80, scale: 0.8, rotationX: 45, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        skewY: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="mb-20" id="title" ref={titleRef}>
      <h1
        className={`mb-3 text-2xl md:text-4xl font-semibold ${
          right ? "text-right" : ""
        } ${center ? "text-center" : ""} text-white`}
      >
        {text}
      </h1>
      <div
        className={`flex ${right ? "justify-end" : ""} ${
          center ? "justify-center" : ""
        }`}
      >
        <div className="w-20 border-b-4 rounded-2xl border-purple-900" />
      </div>
    </div>
  );
};

export default Title;

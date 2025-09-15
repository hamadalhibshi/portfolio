import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { useEffect } from "react";

const MovableObject = () => {
  useEffect(() => {
    gsap.fromTo(
      "#object",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2, delay: 0.5 }
    );
  }, []);

  return (
    <div
      id="object"
      className="
      absolute w-[300px] h-[300px] left-1/2 -translate-x-1/2 top-[6%]
      sm:w-[330px] sm:h-[330px] sm:top-[5%] sm:left-1/2 sm:-translate-x-1/2]
      md:w-[700px] md:h-[700px]
      lg:top-[15%] lg:right-0 lg:left-auto lg:translate-x-0 lg:-translate-y-0
      z-[-10]"
    >
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/pCcXteK80I6QCK8r/scene.splinecode"
      />
    </div>
  );
};

export default MovableObject;

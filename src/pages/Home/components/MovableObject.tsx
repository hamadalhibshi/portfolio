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
      className="absolute w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] lg:right-0 lg:top-[15%] top-[1%] z-[-10]"
    >
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/pCcXteK80I6QCK8r/scene.splinecode"
      />
    </div>
  );
};

export default MovableObject;

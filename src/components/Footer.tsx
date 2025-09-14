import { useEffect } from "react";
import { footer } from "../constants";
import Button from "./Button";
import { gsap } from "gsap";

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      "#footer",
      { opacity: 0, y: -80, scale: 0.8, rotationX: 45, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        skewY: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#footer",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  }, []);

  const handleSendEmail = () => {
    window.location.href =
      "mailto:hamad.alhibshi@gmail.com?subject=Subject&body=Body%20goes%20here";
  };

  return (
    <div
      id="footer"
      className="border-y border-neutral-800 pb-24 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <h1 className="mt-20 text-2xl sm:text-2xl md:text-2xl text-center">
        {footer.title}
      </h1>
      <p className="my-10 text-4xl sm:text-3xl md:text-4xl text-center">
        Let's Work Together!
      </p>
      <div className="text-center text-2xl sm:text-xl md:text-2xl tracking-tighter max-w-2xl mx-auto px-2">
        <p className="my-4">{footer.description}</p>
      </div>
      <div className="flex py-10 justify-center">
        <Button onClick={handleSendEmail}>
          <span className="font-semibold text-sm sm:text-sm md:text-sm">
            {footer.buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;

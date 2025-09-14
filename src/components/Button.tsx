import { useRef } from "react";
import { gsap } from "gsap";
import type { ButtonProps } from "../types";

const Button = ({ href, children, onClick }: ButtonProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        {
          width: "0%",
          height: "0%",
        },
        {
          width: "100%",
          height: "100%",
          duration: 0.2,
          ease: "power2.out",
        }
      );
    }
  };

  const handleMouseLeave = () => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        width: "0%",
        height: "0%",
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  };

  const renderButton = () => {
    return (
      <button
        onClick={onClick}
        className="relative px-8 py-5 rounded-lg overflow-hidden text-white font-semibold border border-purple-800"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={bgRef}
          className="absolute top-0 left-0 h-full bg-purple-800 w-0 z-0"
        />
        <span className="relative z-10">{children}</span>
      </button>
    );
  };

  const renderHref = () => {
    return (
      <a
        onClick={onClick}
        className="relative px-8 py-5 rounded-lg overflow-hidden text-white font-semibold border border-purple-800"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={href}
      >
        <div
          ref={bgRef}
          className="absolute top-0 left-0 h-full bg-purple-800 w-0 z-0"
        />
        <span className="relative z-10">{children}</span>
      </a>
    );
  };

  return href ? renderHref() : renderButton();
};

export default Button;

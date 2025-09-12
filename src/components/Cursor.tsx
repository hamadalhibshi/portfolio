import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    const outer = document.querySelector("#cursor");
    const inner = document.querySelector("#inner-cursor");

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.set(inner, { x: clientX - 5 / 2, y: clientY - 5 / 2 });
      gsap.to(outer, {
        x: clientX - 30 / 2,
        y: clientY - 30 / 2,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleClick = () => {
      gsap
        .timeline()
        .to(
          outer,
          {
            scale: 0.2,
            duration: 0.2,
            ease: "power2.out",
          },
          0
        )
        .to(
          inner,
          {
            scale: 3,
            duration: 0.2,
            ease: "power2.out",
          },
          0
        )
        .to(outer, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          inner,
          {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "<"
        );
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const bgColor = window.getComputedStyle(target).backgroundColor;
      gsap.to(outer, {
        scale: 0.7,
        backgroundColor: bgColor,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(outer, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        className="h-[30px] w-[30px] border border-white rounded-full fixed top-0 left-0 z-50 pointer-events-none flex justify-center items-center"
      />
      <div
        id="inner-cursor"
        className="h-[5px] w-[5px] bg-white rounded-full fixed top-0 left-0 z-50 pointer-events-none"
      />
    </>
  );
};

export default Cursor;

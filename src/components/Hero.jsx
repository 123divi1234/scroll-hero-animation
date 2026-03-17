import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "./Stats";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const headlineRef = useRef(null);
  const carRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {

    // Headline animation
    gsap.from(headlineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Stats stagger animation
    gsap.from(statsRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 0.8
    });

    // Scroll animation for car
    gsap.to(carRef.current, {
      x: 500,
      scrollTrigger: {
        trigger: carRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">

      <h1
        ref={headlineRef}
        className="text-6xl tracking-[0.5em] font-bold"
      >
        WELCOME ITZFIZZ
      </h1>

      <div ref={statsRef}>
        <Stats />
      </div>

      <img
        ref={carRef}
        src="/car.png"
        alt="car"
        className="w-96 mt-20"
      />

    </section>
  );
};

export default Hero;
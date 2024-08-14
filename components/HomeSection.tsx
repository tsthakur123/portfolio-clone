"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SocialIcon from "./SocialIcon";

// Define interface for component props
interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// HomeSection component
const HomeSection: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Effect to dynamically import and initialize Locomotive Scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  // GSAP animations and ScrollTrigger setup
  useGSAP(
    () => (
      // Reset animation properties
      gsap.set(".expo, .expo2, .reveal, .reveal2, .cardReveal", {
        clearProps: "all",
      }),

      // Navbar animation
      gsap.from(".nav", {
        y: "100%",
        opacity: "0",
        duration: 0.4,
        stagger: 0.1,
        ease: "expo.in",
      }),

      // General reveal animations
      gsap.from(".expo", {
        y: "100%",
        rotate: "50deg",
        duration: 0.4,
        stagger: 0.1,
        ease: "expo.in",
      }),
      
      // Scroll-triggered animations
      gsap.to(".expo2", {
        y: "0%",
        rotate: "0",
        duration: 0.6,
        ease: "expo.in",
        scrollTrigger: {
          trigger: "#about .expo2",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".expo3", {
        y: "0%",
        rotate: "0",
        duration: 0.6,
        ease: "expo.in",
        scrollTrigger: {
          trigger: "#services .expo3",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".expo4", {
        y: "0%",
        rotate: "0",
        duration: 0.6,
        ease: "expo.in",
        scrollTrigger: {
          trigger: "#projects .expo4",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".expo5", {
        y: "0%",
        rotate: "0",
        duration: 0.6,
        ease: "expo.in",
        scrollTrigger: {
          trigger: "#testimonials .expo5",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".expo6", {
        y: "0%",
        rotate: "0",
        duration: 0.6,
        ease: "expo.in",
        scrollTrigger: {
          trigger: "#contact .expo6",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.from(".reveal", {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
      }),
      gsap.to(".reveal2", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#about .reveal2",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".reveal3", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#services .reveal3",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".reveal4", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#projects .reveal4",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".reveal5", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#projects .reveal5",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".reveal6", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#testimonials .reveal6",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.to(".reveal7", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#contact .reveal7",
          scroller: "body",
          start: "top 80%",
        },
      }),
      gsap.from(".cardReveal", {
        y: "50%",
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#services",
          scroller: "body",
          start: "top 40%",
          end: "bottom 95%",
          scrub: true,
        },
      }),
      gsap.from(".cardReveal2", {
        y: "50%",
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: "#projects",
          scroller: "body",
          start: "top 40%",
          end: "bottom 95%",
          scrub: true,
        },
      })
    )
  );

  return (
    <>
      {/* Navbar component */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Home Section */}
      <div
        id="home"
        className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row pt-20"
      >
        {/* Text section */}
        <div className="w-full lg:w-3/5 h-full flex flex-col justify-center">
          <div className="overflow-hidden">
            <h3 className="expo origin-left text-lg">Hi I am</h3>
          </div>
          <div className="overflow-hidden">
            <h3 className="expo origin-left text-2xl font-semibold tracking-wider text-[#FD6F00]">
              Tarun Singh
            </h3>
          </div>
          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider overflow-hidden">
            <h1 className="expo origin-left">UI & UX</h1>
          </div>
          <div className="text-5xl sm:text-6xl lg:text-7xl w-full lg:w-9/12 font-bold tracking-wider flex justify-end overflow-hidden h-20">
            <h1 className="expo origin-left">Designer</h1>
          </div>
          <div className="reveal">
            <p className="mt-6 text-sm sm:text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              quaerat ex, deserunt quam at quidem eum architecto quod eaque
              facere reiciendis consequuntur, fugit voluptates saepe dolorem
              assumenda in, unde cupiditate inventore? Amet?
            </p>
          </div>
          <div className="reveal w-fit mt-6">
            <Button />
          </div>
        </div>

        {/* Image and social icons section */}
        <div className="reveal w-full lg:w-2/5 h-full flex flex-col justify-center items-center">
          <Image
            src="/images/hero-img.svg"
            alt="hero"
            width={400} // Adjust width and height according to your image size
            height={900}
            className="w-full h-auto"
          />
          <div className="flex justify-center gap-4 mt-6">
            <SocialIcon isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;

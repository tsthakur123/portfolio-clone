"use client"
import "@/styles/embla.module.css";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestomonialsSection from "@/components/TestomonialsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Effect to toggle dark mode class on the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Dependency array to re-run effect when isDarkMode changes

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
      gsap.to(".revealIcon", {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        delay:.5,
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
    <div className="">
      {/* Home Section with dark mode toggle */}
      <HomeSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Testimonials Section */}
      <TestomonialsSection />
      
      {/* Contact Section with dark mode */}
      <ContactSection isDarkMode={isDarkMode}/>

      {/* Footer Section */}
      <footer className="bg-black flex justify-center items-center h-20 text-lg text-white">
        &copy; 2023 <span className="text-[#FD6F00] mx-1">Mumair</span> All
        Rights Reserved, Inc.
      </footer>
    </div>
  );
}

"use client"
import "@/styles/embla.module.css";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestomonialsSection from "@/components/TestomonialsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect, useState } from "react";

export default function Home() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Effect to toggle dark mode class on the document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Dependency array to re-run effect when isDarkMode changes

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

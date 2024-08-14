import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import NavLinks from "./NavLinks";

interface NavbarProps {
  isDarkMode: boolean; // State indicating if dark mode is enabled
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle dark mode
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  // State for managing mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`${isDarkMode ? 'bg-[#1A202C]' : 'bg-white'} dark shadow-md fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 sm:justify-start">
            <Image
            className="scale-75 md:scale-90 lg:scale-100"
              src={
                isDarkMode ? "/images/logo-dark.svg" : "/images/logo-light.svg"
              }
              alt="Logo"
              width={200}
              height={40}
            />
          </div>
          
          {/* Hamburger icon for small screens */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 dark:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLinks isDarkMode={isDarkMode} />
            <a
              href="/path/to/CV.pdf"
              download
              className="bg-[#FD6F00] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e65b00] transition-colors duration-300"
            >
              Download CV
            </a>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              className={`${isDarkMode ? "bg-[#FD6F00]" : "bg-gray-300"}
                relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable dark mode</span>
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
              />
            </Switch>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute inset-x-0 top-16 ${isDarkMode ? 'bg-[#1A202C]' : 'bg-white'} shadow-md`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLinks isDarkMode={isDarkMode} />
            <a
              href="/path/to/CV.pdf"
              download
              className="bg-[#FD6F00] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e65b00] transition-colors duration-300"
            >
              Download CV
            </a>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              className={`${isDarkMode ? "bg-[#FD6F00]" : "bg-gray-300"}
                relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable dark mode</span>
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

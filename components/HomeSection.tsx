"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Navbar from "./Navbar";
import SocialIcon from "./SocialIcon";

// Define interface for component props
interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// HomeSection component
const HomeSection: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {

  

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

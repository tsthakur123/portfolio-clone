import Image from "next/image";
import { Slider } from "@/components/ui/slider";

// AboutSection component displaying an image, text, and skill sliders
const AboutSection = () => {
  return (
    <div
      id="about"
      className="h-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row gap-8 mt-28 md:mt-14 lg:mt-0"
    >
      {/* Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
        <Image
          src="/images/hero-img.svg"
          alt="Hero Image"
          className="reveal2 opacity-0 scale-0"
          width={600} // Adjust width according to your image size
          height={900}
        />
      </div>

      {/* Text and Skills Section */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center">
        {/* Main Heading */}
        <div className="text-4xl lg:text-7xl font-bold tracking-wider overflow-hidden">
          <h1 className="expo2 translate-y-full rotate-45 origin-left">
            About Me
          </h1>
        </div>

        {/* Description */}
        <p className="reveal2 opacity-100 md:opacity-0 lg:opacity-0 scale-0 mt-6 text-base lg:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          quaerat ex, deserunt quam at quidem eum architecto quod eaque facere
          reiciendis consequuntur, fugit voluptates saepe dolorem assumenda
          in, unde cupiditate inventore? Amet?
        </p>

        {/* Skill Sliders */}
        <div className="flex flex-col gap-6 mt-6">
          <div>
            <p className="text-lg font-semibold">UX</p>
            <Slider defaultValue={[64]} max={100} step={1} />
          </div>
          <div>
            <p className="text-lg font-semibold">Web Design</p>
            <Slider defaultValue={[89]} max={100} step={1} />
          </div>
          <div>
            <p className="text-lg font-semibold">App Design</p>
            <Slider defaultValue={[59]} max={100} step={1} />
          </div>
          <div>
            <p className="text-lg font-semibold">Graphic Design</p>
            <Slider defaultValue={[95]} max={100} step={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from 'react';
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  "/images/highlights/img1.avif",
  "/images/highlights/img2.avif",
  "/images/highlights/img4.avif",
];

const TestimonialsSection = () => {
  return (
    <div
      id="testimonials"
      className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="overflow-hidden text-4xl sm:text-6xl font-semibold tracking-wide text-center">
          <h1 className="expo5 translate-y-full rotate-45 origin-left">
            Testimonials
          </h1>
        </div>
        <p className="reveal6 opacity-0 scale-0 mt-6 text-center w-full max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          quaerat ex, deserunt quam at quidem eum architecto quod eaque facere
          reiciendis consequuntur.
        </p>
        <div className="w-full mt-12">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

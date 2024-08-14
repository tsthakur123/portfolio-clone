import ServiceCards from "@/components/ServiceCards";

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="h-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col"
    >
      {/* Heading Section */}
      <div className="text-center mb-8">
        <div className="overflow-hidden text-4xl sm:text-6xl font-semibold tracking-wide">
          <h1 className="expo3 rotate-45 translate-y-full origin-left">
            Services
          </h1>
        </div>
      </div>

      {/* Description */}
      <p className="reveal3 opacity-0 scale-0 mt-6 text-center w-full sm:w-2/3 mx-auto text-base sm:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
        quaerat ex, deserunt quam at quidem eum architecto quod eaque facere
        reiciendis consequuntur.
      </p>

      {/* Service Cards */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
        <ServiceCards />
      </div>
    </div>
  );
};

export default ServicesSection;

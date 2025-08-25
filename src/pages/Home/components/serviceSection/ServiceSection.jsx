import ServiceCard from "../../../../components/ui/serviceCard";

const ServiceSection = ({ title, subTitle, services }) => {
  return (
    <section className="relative w-full px-20 sm:px-8 md:px-12 lg:px-20 4xl:px-60 mt-20">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4 lg:gap-0">
        <h2 className="font-medium text-white leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[64px] 4xl:text-[72px] 6xl:text-[80px]">
          {title}
        </h2>
        <span className="text-[#A1C0FF] font-poppins font-medium text-sm md:text-base 4xl:text-lg 5xl:text-3xl 6xl:text-4xl leading-snug text-left lg:text-right max-w-xl">
          {subTitle}
        </span>
      </div>

      <div className="flex flex-col gap-8">

        {/* Row 1 - Two equal cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <ServiceCard service={services[0]} />
          </div>
          <div className="w-full lg:w-1/2">
            <ServiceCard service={services[1]} />
          </div>
        </div>

        {/* Row 2 - Unequal widths */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[60%]">
            <ServiceCard service={services[2]} />
          </div>
          <div className="w-full lg:w-[40%]">
            <ServiceCard service={services[3]} />
          </div>
        </div>

        {/* Row 3 - Large + small */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[65%]">
            <ServiceCard service={services[4]} />
          </div>
          <div className="w-full lg:w-[35%]">
            <ServiceCard service={services[5]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;

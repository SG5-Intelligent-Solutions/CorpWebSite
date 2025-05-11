import ServiceColumn from "./ServiceColumn";

const ServiceSection = ({ title, subTitle, services }) => {
  return (
    <section className="relative w-full px-20 sm:px-8 md:px-12 lg:px-20  4xl:px-60 mt-20">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 gap-4 lg:gap-0">
        <h2 className="font-medium text-white leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-[64px] 4xl:text-[72px] 6xl:text-[80px]">
          {title}
        </h2>
        <span className="text-[#A1C0FF] font-poppins font-medium text-sm  md:text-base  4xl:text-lg 5xl:text-3xl 6xl:text-4xl leading-snug text-left lg:text-right max-w-xl">
          {subTitle}
        </span>
      </div>

      {/* Service Columns */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 xl:gap-12 4xl:gap-16">
        {[1, 2, 3].map((colId) => (
          <ServiceColumn key={colId} services={services} colId={colId} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;

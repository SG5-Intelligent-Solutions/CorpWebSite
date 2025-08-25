
const TestimonialSection = ({ title, subTitle, children }) => {
  return (
    <section className="relative w-full mt-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-[77px]">
          {title}
        </h2>
        <span className="font-inter font-medium text-sm md:text-base text-[#a1c0ff] text-left md:text-right tracking-[0] leading-[27.2px] whitespace-nowrap">
          {subTitle}
        </span>
      </div>
      {children}
    </section>
  );
};

export default TestimonialSection;


const TestimonialSection = ({ title, subTitle, children }) => {
  return (
    <section className="relative w-full mt-20 px-20">
      <div className="flex flex-row items-center justify-between mb-10">
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[77px]">
          {title}
        </h2>
        <span className=" font-inter font-medium text-sm  md:text-base  4xl:text-lg 5xl:text-3xl 6xl:text-4xl  text-[#a1c0ff]  text-right tracking-[0] leading-[27.2px]">
          {subTitle}
        </span>
      </div>
      {children}
    </section>
  );
};

export default TestimonialSection;

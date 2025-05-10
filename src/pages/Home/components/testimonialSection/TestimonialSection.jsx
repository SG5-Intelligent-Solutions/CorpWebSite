
const TestimonialSection = ({ title, subTitle, children }) => {
  return (
    <section className="relative w-full mt-20 px-20">
      <div className="flex flex-row items-center justify-between mb-10">
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[77px]">
          {title}
        </h2>
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#a1c0ff] text-base text-right tracking-[0] leading-[27.2px]">
          {subTitle}
        </span>
      </div>
      {children}
    </section>
  );
};

export default TestimonialSection;

const IndustrySection = ({ title, subTitle, children, backgroundImage }) => {
  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 px-0 4xl:px-20 mt-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-top z-0"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "contain",
        }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 md:py-8 lg:py-10 z-20 relative mb-8 md:mb-12">
        <h2 className="font-['Poppins'] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight leading-tight mb-4 md:mb-0">
          {title}
        </h2>
        <span className="font-inter text-[#A1C0FF] font-medium text-sm md:text-base 4xl:text-lg 5xl:text-3xl 6xl:text-4xl text-left md:text-right tracking-normal leading-relaxed">
          {subTitle}
        </span>
      </div>

      {/* Children positioned just below header/background image area */}
      <div className="relative z-20 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}
      </div>
    </section>
  );
};

export default IndustrySection;
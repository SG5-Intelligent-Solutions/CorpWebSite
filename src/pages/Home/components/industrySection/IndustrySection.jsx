import React from "react";

const IndustrySection = ({ title, subTitle, children, backgroundImage }) => {
  // Convert children to array to work with them
  const childrenArray = React.Children.toArray(children);
  
  // First row cards (first 3 cards)
  const firstRowCards = childrenArray.slice(0, 3);
  
  // Second row cards (next 2 cards)
  const secondRowCards = childrenArray.slice(3, 5);
  
  // Any remaining cards
  const remainingCards = childrenArray.slice(5);

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 px-0 4xl:px-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-right-top opacity-90 z-0"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: 'contain' }}
      />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 md:py-8 lg:py-10 z-20 relative mb-8 md:mb-12">
        <h2 className="font-['Poppins'] font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight leading-tight mb-4 md:mb-0">
          {title}
        </h2>
        <span className="font-['Inter'] font-medium text-[#a1c0ff]  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-5xl text-left md:text-right tracking-normal leading-relaxed">
          {subTitle}
        </span>
      </div>
      
      {/* First row - exactly 3 cards */}
      {firstRowCards.length > 0 && (
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 ">
            {firstRowCards.map((card, index) => (
              <div key={index} className="flex justify-center">
                {card}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Second row - exactly 2 cards centered */}
      {secondRowCards.length > 0 && (
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl 5xl:max-w-7xl mx-auto gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {secondRowCards.map((card, index) => (
              <div key={index} className="flex justify-center">
                {card}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Any remaining cards */}
      {remainingCards.length > 0 && (
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {remainingCards.map((card, index) => (
              <div key={index} className="flex justify-center">
                {card}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustrySection;
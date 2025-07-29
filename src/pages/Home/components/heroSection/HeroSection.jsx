import React from "react";

const HeroSection = ({
  title = "Welcome to SG5.ai",
  heading = "Your Partner in Digital Transformation!",
  description = `At SG5.ai, we specialize in delivering innovative AI, ML, data
  engineering, blockchain, and bespoke software solutions that drive
  business success. Discover how our advanced technology can help
  your organization thrive.`,
  backgroundImage = "/3d-network-communications-background-with-glowing-particles-conn.png",
}) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 xl:p-20 overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover animate-background-pan"
          alt="Background"
          src={backgroundImage}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Text Content - Left Side */}
      <div className="relative z-10 w-full mt-20 md:mt-32 lg:mt-40 xl:mt-48 mb-12 md:mb-0 md:pr-8">
        <h4 className="font-normal text-[#a1c0ff] font-poppins mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl 2xl:text-3xl  3xl:text-4xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl">
          {title || ""}
        </h4>
        <div
          className="font-bebas bg-gradient-to-b from-white to-[#A1C0FF] bg-clip-text text-transparent  
          font-bold 2xl:text-7xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl 6xl:text-[12rem]
          leading-[1.1] md:leading-[1.2] uppercase mb-8 md:mb-12"
        >
          {/* {heading?.split("\n")?.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))} */}
          {heading || ""}
        </div>
        <div className="rounded-[20px] md:w-2/3">
          <p className="font-poppins font-normal text-white text-base md:text-lg lg:text-xl 
           3xl:text-4xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl leading-relaxed md:leading-loose">
            {description || ""}
          </p>
        </div>
      </div>

      {/*  Right Side (Static) */}
      {/* <div className="relative z-10 w-full 2xl:w-full lg:w-2/3 3xl:w-full flex items-center justify-center 3xl:justify-center md:justify-end mt-8 md:mt-0">
        <div className="relative w-full max-w-[600px] xl:max-w-[839px] aspect-square">
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <img
                className="absolute w-full h-full"
                src="/vector-9.svg"
                alt="Background effect"
              />
              <img
                className="absolute w-[87%] h-[87%] top-[6%] left-[6%]"
                src="/vector-7.svg"
                alt="Decorative layer"
              />
              <img
                className="absolute w-[82%] h-[82%] top-[9%] left-[9%]"
                src="/vector-8.svg"
                alt="Effect layer"
              />
              <img
                className="absolute w-[80%] h-[80%] top-[10%] left-[10%]"
                src="/vector-11.svg"
                alt="Effect layer"
              />
              <img
                className="absolute w-[70%] h-[70%] top-[15%] left-[15%]"
                src="/vector-6.svg"
                alt="Effect layer"
              />
              <img
                className="absolute w-[65%] h-[65%] top-[17.5%] left-[17.5%]"
                src="/vector-2.svg"
                alt="Effect layer"
              />
              <img
                className="absolute w-[55%] h-[55%] top-[22.5%] left-[22.5%]"
                src="/group.png"
                alt="Main graphic"
              />
              <img
                className="absolute w-[25%] h-[30%] top-[35%] left-[37%]"
                src="/hh-sg5branding-new-01-1-1.png"
                alt="Company logo"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes background-pan {
          0% {
            transform: scale(1) translateX(0) translateY(0);
          }
          50% {
            transform: scale(1.1) translateX(5%) translateY(2%);
          }
          100% {
            transform: scale(1) translateX(0) translateY(0);
          }
        }

        .animate-background-pan {
          animation: background-pan 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

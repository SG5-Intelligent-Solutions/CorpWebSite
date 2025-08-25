const DigitalHandSection = ({
  videoSrc = "/Hand.mp4",
  heading = (
    <>
      SG5.ai is a{" "}
      <span className="font-bold bg-gradient-to-r from-[#A1C0FF] to-[#A1C0FF] bg-clip-text text-transparent">
        forward-
        <br className="hidden sm:block" />
        thinking technology
        <br className="hidden sm:block" />
        startup{" "}
      </span>
      based in Texas.
    </>
  ),
  description = `Our mission is to empower businesses with data-driven solutions 
  that enhance efficiency, optimize operations, and foster 
  sustainable growth. With expertise spanning AI, blockchain, and 
  custom development, we provide tailored services that meet the 
  evolving needs of diverse industries.`,
}) => {
  return (
    <section className="relative w-full mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        <div className="flex-1 relative w-full lg:w-1/2 h-[300px] xs:h-[400px] sm:h-[500px] md:h-[550px] lg:h-[636px] 2xl:h-full order-2 lg:order-1">
          <video
            className="w-full  object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="absolute w-[80%] h-[80%] max-w-[514px] max-h-[514px] top-0 right-0 bg-[url(/vector-4.svg)] bg-contain bg-no-repeat">
            <div className="relative w-full h-full bg-[url(/vector-5.svg)] bg-contain bg-no-repeat">
              <img
                className="absolute w-[88%] h-[88%] top-[6%] left-[6%]"
                src="/vector-10.svg"
                alt="Vector"
              />
              <img
                className="absolute w-[87%] h-[87%] top-[6.5%] left-[6.5%]"
                src="/vector-1.svg"
                alt="Vector"
              />
              <img
                className="absolute w-[75%] h-[75%] top-[12.5%] left-[12.5%]"
                src="/vector-3.svg"
                alt="Vector"
              />
              <img
                className="absolute w-[74%] h-[74%] top-[13%] left-[13%]"
                src="/vector.svg"
                alt="Vector"
              />
              <img
                className="absolute w-[59%] h-[59%] top-[20.5%] left-[20.5%]"
                src="/group-1.png"
                alt="Group"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10  2xl:gap-18 3xl:gap-24 4xl:gap-32 w-full lg:w-1/2  order-1 lg:order-2">
          <h1 className=" bg-gradient-to-r from-[#A1C0FF] to-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl 
          4xl:text-8xl 5xl:text-9xl 6xl:text-[10rem] leading-tight">
            {heading}
          </h1>
          <p className="text-white font-poppins font-normal text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalHandSection;

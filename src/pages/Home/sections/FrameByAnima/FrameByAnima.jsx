import { ArrowRight, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const FrameByAnima = () => {
  // Array of industry data for swipeable content
  const industriesData = [
    {
      id: "energy",
      title: "Energy",
      challenges: {
        title: "Key Challenges:",
        description:
          "Dynamic energy pricing, asset management, and operational inefficiencies.",
      },
      solutions: {
        title: "SG5.ai Solutions",
        description:
          "Smart Energy Management System, Predictive Asset Management, Data-Driven Decision Support.",
      },
      image: "/img1.png",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      challenges: {
        title: "Key Challenges:",
        description:
          "Regulatory compliance, data management, and operational efficiency.",
      },
      solutions: {
        title: "SG5.ai Solutions",
        description:
          "Blockchain-Based Compliance Tool, Bespoke Software Development, AI & ML for Predictive Healthcare Analytics.",
      },
      image: "/img2.png",
    },
    {
      id: "transport",
      title: "Logistics & Transportation",
      challenges: {
        title: "Key Challenges:",
        description:
          "Fleet management, route optimization, and predictive maintenance.",
      },
      solutions: {
        title: "SG5.ai Solutions",
        description:
          "EV Fleet Management Platform, Predictive Asset Management, Data Engineering.",
      },
      image: "/img3.png",
    },
    {
      id: "finance",
      title: "Finance",
      challenges: {
        title: "Key Challenges:",
        description:
          "Data-driven decision-making, fraud detection, and compliance.",
      },
      solutions: {
        title: "SG5.ai Solutions",
        description:
          "Data-Driven Decision Support Platform, Blockchain Services, Custom Software Development.",
      },
      image: "/finance.svg",
    },
    {
      id: "aerospace",
      title: "Aerospace",
      challenges: {
        title: "Key Challenges:",
        description:
          "Asset lifecycle management, regulatory compliance, and operational optimization.",
      },
      solutions: {
        title: "SG5.ai Solutions",
        description:
          "Predictive Asset Management System, Blockchain-Based Compliance Tool, Consulting & Custom Development.",
      },
      image: "/aerospace.svg",
    },
  ];

  // State for tracking current industry index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const currentIndustry = industriesData[currentIndex];

  // Slider reference and state
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [startPosition, setStartPosition] = useState(0);

  // Calculate position for the slider indicator (centered arrow)
  const calculateThumbPosition = (index) => {
    const position = index / (industriesData.length - 1);
    return position * 100;
  };

  // Initialize slider dimensions
  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
  }, []);

  // Check if slider is completed
  useEffect(() => {
    setIsCompleted(currentIndex === industriesData.length - 1);
  }, [currentIndex, industriesData.length]);

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX || (e.touches && e.touches[0].clientX));
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag, { passive: false });
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
    e.preventDefault();
  };

  // Handle drag
  const handleDrag = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - sliderRect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / sliderWidth));

    // Calculate nearest index based on percentage
    const newIndex = Math.round(percentage * (industriesData.length - 1));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
    e.preventDefault();
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchend", handleDragEnd);
  };

  // Handle click on slider track
  const handleSliderClick = (e) => {
    if (!sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - sliderRect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / sliderWidth));

    // Calculate nearest index based on percentage
    const newIndex = Math.round(percentage * (industriesData.length - 1));
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-black">
      {/* Animated background with video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/sg5Bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top gradient overlay */}
      <div className="absolute w-full h-64 top-0 left-0 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom gradient overlay */}
      <div className="absolute w-full h-64 bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Main content container */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16">
          <h2 className="font-medium text-white text-3xl md:text-5xl leading-tight max-w-3xl">
            Transforming Core Industries Through Innovation
          </h2>
          <div className="mt-4 md:mt-0">
            <span className="text-[#A1C0FF] font-inter font-medium text-sm md:text-base text-left md:text-right">
              Industries We Serve
            </span>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Image with play button */}
          <div className="relative w-full lg:flex-1">
            <div className="w-full mx-auto rounded-2xl overflow-hidden">
              <div className="p-0 flex justify-center items-center">
                <div
                  className="relative aspect-video rounded-2xl bg-center bg-cover w-full h-[15rem] md:h-[30rem] transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${currentIndustry.image})` }}
                >
                  {/* Play button with hover effects */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-5 bg-black bg-opacity-70 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 hover:scale-110 transition-all duration-300 group">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative w-full lg:w-[50%] text-white p-4 md:p-8">
            {/* Main content */}
            <div className="relative z-10">
              {/* Industry title with animation */}
              <h2 className="text-4xl md:text-5xl font-poppins font-medium bg-gradient-to-b from-white to-[#A1C0FF] bg-clip-text text-transparent mb-8 md:mb-10 transition-all duration-700 ease-in-out transform">
                {currentIndustry.title}
              </h2>

              <div className="relative h-auto md:h-full rounded-lg">
                {/* Challenges card with enhanced styling */}
                <div className="min-h-[28rem] md:w-[20rem] h-full bg-navy-900 bg-opacity-40 backdrop-blur-md rounded-lg border-[5px] border-[#A1C0FF] p-6 transition-all duration-500 ease-in-out hover:border-blue-300 hover:shadow-lg hover:shadow-blue-300/20 mb-8 lg:mb-0">
                  <h3 className="font-poppins text-3xl font-medium text-[#FFFFFF] mb-6">
                    Key
                    <br />
                    Challenges:
                  </h3>

                  <p className="font-poppins text-xl font-medium text-[#FFFFFF] transition-all duration-500 ease-in-out">
                    {currentIndustry.challenges.description}
                  </p>
                </div>

                {/* Solutions card with enhanced positioning and effects */}
                <div className="w-full md:w-[22rem] h-auto md:min-h-[22rem] bg-blue-300 rounded-lg p-6 md:absolute md:left-1/3 md:-bottom-[10rem] transition-all duration-500 ease-in-out hover:bg-blue-200 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-105">
                  <h3 className="text-xl md:text-2xl font-poppins font-medium text-[#000000] mb-4">
                    SG5.ai <br /> Solutions
                  </h3>
                  <p className="text-base font-poppins font-medium text-[#000000] transition-all duration-300">
                    {currentIndustry.solutions.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Swipe indicator */}
        <div className="flex flex-col items-center mt-16 lg:mt-32">
          <p className="font-poppins text-lg md:text-xl font-medium text-[#A1C0FF] mb-4 transition-colors duration-300">
            Swipe to see more
          </p>

          {/* Enhanced Custom slider component */}
          <div className="relative w-full max-w-xs sm:w-80 mb-6">
            {/* Slider track with enhanced styling */}
            <div
              ref={sliderRef}
              className="relative w-full h-12 bg-gray-800 rounded-full border-2 border-white shadow-lg shadow-blue-300/30 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-blue-300/50"
              onClick={handleSliderClick}
            >
              {/* Animated fill background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#638dd1] to-[#387ff1] rounded-full transition-all duration-500 ease-out ${
                  isCompleted ? "shadow-inner shadow-green-400/50" : ""
                }`}
                style={{
                  width: `${calculateThumbPosition(currentIndex)}%`,
                  transition: isDragging
                    ? "none"
                    : "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />

              {/* Progress sparkle effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 animate-pulse"
                style={{
                  width: `${calculateThumbPosition(currentIndex)}%`,
                  animation: isCompleted ? "pulse 1s infinite" : "none",
                }}
              />

              {/* Completion celebration effect */}
              {isCompleted && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-pulse" />
              )}

              {/* Slider thumb - centered arrow */}
              <div
                ref={thumbRef}
                className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing z-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                  isDragging ? "scale-105 shadow-xl" : ""
                } ${isCompleted ? "bg-[#5482cb] shadow-green-400/50" : ""}`}
                style={{
                  left: `calc(${calculateThumbPosition(
                    currentIndex
                  )}% - 20px)`,
                  transition: isDragging
                    ? "none"
                    : "left 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease",
                }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
              >
                <ArrowRight
                  size={20}
                  className={`transition-all duration-300 ${
                    isCompleted ? "text-white rotate-90" : "text-[#4688f3]"
                  } ${isDragging ? "scale-110" : ""}`}
                />
              </div>

              {/* Progress indicators (dots) */}
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                {industriesData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= currentIndex ? "bg-white shadow-sm" : "bg-gray-500"
                    }`}
                    style={{
                      transform:
                        index === currentIndex ? "scale(1.5)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Progress text */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
              <span className="transition-colors duration-300">
                {currentIndex + 1} of {industriesData.length}
              </span>
            </div>
          </div>

          {/* Industry navigation dots */}
          <div className="flex space-x-3 mt-4">
            {industriesData.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-400 shadow-lg shadow-blue-400/50 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to ${industry.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
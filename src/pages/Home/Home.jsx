import { FrameByAnima } from "./sections/FrameByAnima";
import TestimonialSlider from "../../components/ui/TestimonialSlider";
import { cardsData, services } from "../../lib/utils";
import HeroSection from "./components/heroSection/HeroSection";
import DigitalHandSection from "./components/digitalHandSection/DigitalHandSection";
import ServiceSection from "./components/serviceSection/ServiceSection";
import IndustrySection from "./components/industrySection/IndustrySection";
import TestimonialSection from "./components/testimonialSection/TestimonialSection";
import IndustrySolutionCard from "./components/industrySection/components/IndustrySolutionCard";
import { useEffect, useState } from "react";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cardsData.length / cardsPerView);

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const getVisibleCards = () => {
    const startIndex = currentSlide * cardsPerView;
    return cardsData.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <>
      <div className="relative w-full">
        {/* Hero Section */}
        <HeroSection
          title="Welcome to SG5.ai"
          heading={
            <>
              Your Partner
              <br />
              In Digital
              <br />
              Transformation!
            </>
          }
          description=" At SG5.ai, we specialize in delivering innovative AI, ML, data
              engineering, blockchain, and bespoke software solutions that drive
              business success. Discover how our advanced technology can help
              your organization thrive."
          backgroundImage="/sg5.svg"
        />

        {/* Digital Hand Section */}
        <DigitalHandSection
          videoSrc="/hand-animation.mp4"
          heading={
            <>
              SG5.ai is a{" "}
              <span className="font-bold bg-gradient-to-r from-[#A1C0FF] to-white bg-clip-text text-transparent">
                forward-
                <br />
                thinking technology
                <br />
                startup{" "}
              </span>{" "}
              based in Texas.
            </>
          }
          description=" Our mission is to empower businesses with data-driven solutions
              that enhance efficiency, optimize operations, and foster
              sustainable growth. With expertise spanning AI, blockchain, and
              custom development, we provide tailored services that meet the
              evolving needs of diverse industries"
        />

        {/* Services Section */}
        <ServiceSection
          title={
            <>
              Tailored Technology Services
              <br /> That Drive Results
            </>
          }
          subTitle="SOLUTIONS"
          services={services}
        />

        {/* Industry Section */}
        <IndustrySection
          title={
            <>
              Built for the <br />
              Future of Industry
            </>
          }
          subTitle="Our Products"
          backgroundImage="/industry.svg"
        >
          <div className="container mx-auto px-4 lg:mt-[35%]">
            {/* Carousel Container */}
            <div className="relative">
              {/* Cards Row - Now a Carousel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-full">
                {getVisibleCards().map((card, index) => (
                  <div
                    key={`${currentSlide}-${index}`}
                    className={`h-full transition-all duration-500 ease-in-out ${
                      cardsPerView === 3 && index === 1
                        ? "transform -translate-y-8 z-10" // Center card elevated
                        : "z-0"
                    }`}
                  >
                    <IndustrySolutionCard {...card} />
                  </div>
                ))}
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center items-center gap-3 mt-12">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'bg-blue-300 scale-125'
                        : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </IndustrySection>

        <section>
          <FrameByAnima />
        </section>

        {/* Testimonials Section */}
        <TestimonialSection
          title={
            <>
              What our customers <br />
              are saying
            </>
          }
          subTitle="Testimonials"
        >
          <TestimonialSlider />
        </TestimonialSection>
      </div>
    </>
  );
};
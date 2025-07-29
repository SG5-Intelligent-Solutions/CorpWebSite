import { BackgroundByAnima } from "./sections/BackgroundByAnima";
import { BackgroundWrapperByAnima } from "./sections/BackgroundWrapperByAnima";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import TestimonialSlider from "../../components/ui/TestimonialSlider";
import { cardsData, services } from "../../lib/utils";
import HeroSection from "./components/heroSection/HeroSection";
import DigitalHandSection from "./components/digitalHandSection/DigitalHandSection";
import ServiceSection from "./components/serviceSection/ServiceSection";
import IndustrySection from "./components/industrySection/IndustrySection";
import TestimonialSection from "./components/testimonialSection/TestimonialSection";
import IndustrySolutionCard from "./components/industrySection/components/IndustrySolutionCard";

export const Home = () => {
  return (
    <div className="relative w-full bg-black">
      <FrameWrapperByAnima />

      {/* Hero Section */}
      <HeroSection
        title="Welcome to SG5.ai"
        heading={
          <>
            Your Partner in
            <br />
            Digital Transformation!
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
        videoSrc="/Hand.mp4"
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
        backgroundImage="/industry-bg-2.svg"
      >
        <div className="container mx-auto px-4">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-full">
            {cardsData?.slice(0, 3)?.map((card, index) => (
              <div key={index} className="h-full">
                <IndustrySolutionCard {...card} />
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {cardsData?.slice(3, 5)?.map((card, index) => (
              <div
                key={index}
                className="h-full lg:mx-auto lg:w-full xl:max-w-xl"
              >
                <IndustrySolutionCard {...card} />
              </div>
            ))}
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

      {/* Footer Section */}
      <FooterByAnima />
    </div>
  );
};

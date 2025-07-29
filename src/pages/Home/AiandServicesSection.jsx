import { ChevronDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordian";
import { Card, CardContent } from "../../components/ui/card";
import AccordionSection from "./Accordian";

// The main section that displays the accordion items
export const AIAndServicesSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(value);
  };

  const serviceItems = [
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning Solutions",
      icon: "/group-22.png",
      content: "At SG5.ai, we’re not just building software – we’re engineering intelligent solutions that transform businesses for the digital age.",
    },
    {
      id: "blockchain-web3",
      title: "Blockchain & Web3 Development",
      icon: "/vector-5.svg",
      content: "To support these intelligent systems, we offer end-to-end data engineering services that ensure your data is reliable, accessible, and actionable.",
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      icon: "/vector-2.svg",
      content: "Our data engineering services help you turn data into actionable insights.",
    },
    {
      id: "custom-software",
      title: "Custom Software & Web Development",
      icon: "/vector.svg",
      content: "We build custom software solutions to meet your unique needs.",
    },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/wholeFrame.png')", // Background image applied to the whole section
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Card Section with Image Background */}
      <div className="w-full  py-16" >
        <div className="flex flex-col items-center justify-center gap-5 w-full ">
        <Card className="w-[1400px] h-[617px] bg-[#ffffff1a] rounded-[10px] overflow-hidden backdrop-blur-[200px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(200px)_brightness(100%)]">
          <CardContent className="p-0 h-full relative ">
            {/* Divider line */}
            <img
              className="absolute w-[354px] h-0.5 top-[78px] left-[349px]"
              alt="Line"
              src="/divider.svg"
            />

            {/* Icon with gradient border */}
            <div className="top-[42px] left-[60px] border-[none] absolute w-[71px] h-[75px] rounded-[8.33px] before:content-[''] before:absolute before:inset-0 before:p-[0.83px] before:rounded-[8.33px] before:[background:linear-gradient(270deg,rgba(94,133,227,1)_0%,rgba(137,167,235,1)_28%,rgba(246,251,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <div className="relative w-[50px] h-[50px] top-3 left-[9px]">
                <div className="relative w-[41px] h-[45px] top-1 left-1">
                  <img
                    className="absolute w-[41px] h-[41px] top-0 left-0"
                    alt="Vector"
                    src="/service6.png"
                  />
                </div>
              </div>
            </div>

            {/* Service title */}
            <div className="absolute h-[34px] top-[60px] left-[186px] [font-family:'Poppins',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[34px] whitespace-nowrap">
              AI Services
            </div>

            {/* Pagination indicator */}
            <div className="absolute w-[30px] h-[34px] top-[60px] left-[736px] [font-family:'Inter',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[34px] whitespace-nowrap">
              6/6
            </div>

            {/* Main heading */}
            <h2 className="absolute w-[783px] h-[59px] top-[221px] left-[61px] opacity-80 [font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[56px] tracking-[1.12px] leading-[58.8px]">
              SG5 Services
            </h2>

            {/* Description text */}
            <p className="w-[660px] h-[170px] top-[316px] left-[61px] text-[#ffffffbf] text-[26px] tracking-[0] leading-[34px] absolute [font-family:'Poppins',Helvetica] font-normal">
              At SG5.ai, we engineer intelligent AI-driven solutions that help
              businesses lead in the digital era. From machine learning and data
              analytics to blockchain and custom software, we turn bold ideas
              into impactful, future-ready technologies.
            </p>

            {/* Background image */}
            <div className="absolute w-[520px] h-[481px] top-[69px] left-[855px] rounded-[20px] bg-[url(/header-background-image.png)] bg-cover bg-[50%_50%]" />
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Accordion Section with Image Background */}
      <div
        className="w-full bg-cover bg-center"
      
      >
        <AccordionSection />
      </div>
    </section>
  );
};

export default AIAndServicesSection;

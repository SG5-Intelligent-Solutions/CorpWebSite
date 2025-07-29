import { ChevronDownIcon, ArrowUpIcon } from "lucide-react";
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordian";
import { Card, CardContent } from "../../components/ui/card";

// The main section that displays the accordion items
export const AccordionSection = () => {
  // State to track the open item
  const [openItem, setOpenItem] = useState(null);

  // Handler for when an accordion item changes
  const handleAccordionChange = (value) => {
    // Toggle open/close when the same item is clicked, otherwise open the new one
    setOpenItem(prev => (prev === value ? null : value));
  };

  const serviceItems = [
    {
      id: "ai-machine-learning",
      title: "AI & Machine Learning Solutions",
      icon: "/aibulb.png",
      image:"/rectangle-8.png",
      count:"1/6",
      content: "At SG5.ai, we’re not just building software – we’re engineering intelligent solutions that transform businesses for the digital age. Our Artificial Intelligence and Machine Learning services are designed to help organizations turn data into action. From predictive analytics that forecast trends with stunning accuracy to natural language processing that redefines customer interactions, and computer vision systems that bring automation into physical environments, we equip our clients with AI capabilities that deliver measurable impact. We also specialize in deploying generative AI and large language models to automate content creation, enhance internal knowledge management, and revolutionize how teams work.",
    },
    {
      id: "blockchain-web3",
      title: "Blockchain & Web3 Development",
      icon: "/eos-icons-blockchain.svg",
      image:"/blockchain.png",
      count:"2/6",
      content: "As pioneers in blockchain and decentralized technologies, we help organizations move beyond the hype and implement blockchain where it drives real value. Whether it’s developing smart contracts to automate trust, creating decentralized applications that empower users, or introducing tokenization and digital identity frameworks that enhance compliance and security, SG5.ai is your partner in building transparent, tamper-proof ecosystems that align with the Web3 future.",
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      icon: "/icon3.png",
      image:"/rectangle-9.png",
      count:"3/6",
      content: "To support these intelligent systems, we offer end-to-end data engineering services that ensure your data is reliable, accessible, and actionable. Our team builds modern data pipelines, implements scalable big data infrastructure, and integrates real-time analytics, enabling your business to respond instantly to critical changes and insights. Data isn’t just numbers – it’s your next strategic advantage, and we help you unlock its full potential.",
    },
    {
      id: "custom-software",
      title: "Custom Software & Web Development",
      count:"4/6",
      icon: "/eos-icons-service-outlined.svg",
      image:"/rectangle-22.png",
      content: "We also design and develop custom software and web applications that are tailored to fit the unique needs of each client. Our software solutions are robust, scalable, and user-friendly, built to align with your operations and scale as you grow. From enterprise-grade platforms to mobile and web applications, every solution we create is grounded in business logic and designed to integrate seamlessly into your ecosystem.",
    },
    {
        id: "Consulting-Strategy",
        title: "Consulting & Innovation Strategy",
        image:"/rectangle-21.png",
        count:"5/6",
        icon: "/hugeicons-blockchain-02.svg",
        content: "Beyond technology, SG5.ai provides strategic consulting to guide organizations through digital transformation. Our consultants work with business leaders to craft pragmatic roadmaps for AI integration, infrastructure modernization, and innovation acceleration. Through rapid prototyping and innovation workshops, we help bring bold ideas to life in days, not months. For investors, VCs, and startups, our tech due diligence offerings provide a clear picture of technical viability and scalability.",
      },
      {
        id: "Managed Services",
        title: "Managed Services & Continuous Support",
        image:"/Rectangle 25.png",
        count:"6/6",
        icon: "/carbon-service-id.svg",
        content: "Finally, our managed services ensure long-term success beyond deployment. With continuous monitoring, performance optimization, and DevOps automation, we keep systems running at their peak. Security patches, incident response, and proactive improvements are all part of our promise to deliver sustained excellence—because our relationship with clients doesn’t end at launch, it grows",
      },
  ];

  return (
    <section className="flex items-center justify-center gap-2.5 p-20 relative w-full">
      <div className="flex flex-col w-full max-w-[1499.5px] items-start gap-5 relative">
        <Accordion type="single" value={openItem} onValueChange={handleAccordionChange} className="w-full">
          {serviceItems.map((service) => (
            <AccordionItem
              key={service.id}
              value={service.id}
              className="mb-5 last:mb-0 bg-[#ffffff1a] rounded-[10px] overflow-hidden backdrop-blur-[200px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(200px)_brightness(100%)]"
            >
              {/* Hide the entire item (header, icon) when the content is opened */}
              <AccordionTrigger className={`h-[136px] px-0 py-0 hover:no-underline ${openItem === service.id ? 'hidden' : ''}`}>
                
                <div className="flex items-center w-full">
                  {/* Service icon with gradient border */}
                  <div className="w-[71px] h-[90px] ml-[60px] relative  before:content-[''] before:absolute before:inset-0 before:p-[0.83px] before:rounded-[8.33px] before:[background:linear-gradient(270deg,rgba(94,133,227,1)_0%,rgba(137,167,235,1)_28%,rgba(246,251,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <img
                      className="absolute w-[45px] h-[60px] top-3 left-3 rounded-[8.33px]"
                      alt={service.title}
                      src={service.icon}
                    />
                  </div>

                  {/* Service title */}
                  <h3 className="ml-[53px] opacity-40 [font-family:'Bebas_Neue',Helvetica] font-normal text-[#f2f6ff] text-[56px] tracking-[1.12px] leading-[56px]">
                    {service.title}
                  </h3>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                {/* Render Frame component only when the Accordion item is open */}
                {openItem === service.id && (
                  <Card className="relative w-[1500px] h-[500px] bg-[#a1c0ff] rounded-[10px] overflow-hidden">
                    <CardContent className="p-0">
                    <div className="absolute h-[34px] top-[60px] left-[186px] [font-family:'Poppins',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[34px] whitespace-nowrap">
              {service.title}
            </div>
            

              {/* Pagination indicator */}
              <div className="absolute w-[30px] h-[34px] top-[60px] left-[736px] [font-family:'Inter',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[34px] whitespace-nowrap">
              {service.count}
            </div>
                      <h2 className="absolute h-9 top-[150px] left-[61px] font-['Poppins',Helvetica] font-semibold text-black text-3xl tracking-[0] leading-9 whitespace-nowrap">
                        {service.title}
                      </h2>

                      <p className="absolute w-[700px] h-[234px] top-[201px] left-[61px] font-['Poppins',Helvetica] font-normal text-[#000000bf] text-xl tracking-[0] leading-[26px]">
                        {service.content}
                      </p>

                      <img
                        className="absolute w-[388px] h-[325px] top-[146px] left-[930px] rounded-[20px] object-cover"
                        alt="AI visualization"
                        src={service.image}
                      />

                      <div className="flex w-20 h-20 items-center justify-center gap-[8.89px] absolute top-[38px] left-[61px] bg-[#141414cc] rounded-[8.89px] overflow-hidden">
                        <img
                          className="relative w-14 h-14"
                          alt="AI machine learning icon"
                          src={service.icon}
                        />
                      </div>

                      {/* ArrowUpIcon for closing the accordion */}
                      <div className="absolute top-[43px] left-[1300px]">
                        <ArrowUpIcon
                          className="w-[51px] h-[50px] text-black cursor-pointer"
                          onClick={() => setOpenItem(null)} // Close the accordion on click
                        />
                      </div>

                    </CardContent>
                  </Card>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionSection;

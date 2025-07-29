import React, { useState } from "react";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { AIAndServicesSection } from "./AiandServicesSection";


const serviceItems = [
    'AI & Machine Learning Solutions',
    'Blockchain & Web3 Development',
    'Data Engineering & Analytics',
    'Custom Software & Web Development',
    'Consulting & Innovation Strategy',
    'Managed Services & Continuous Support'
  ];
export const  Service = ()=>
{
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (

<>
<FrameWrapperByAnima />

<section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="flex flex-col w-full items-start">
          <img
            className="w-full h-auto object-cover"
            alt="Network communications background"
            src="/servicesHerN.png"
          />

          <div className="absolute inset-0 top-[149px] bg-gradient-to-b from-transparent to-black opacity-100" />
        </div>

        <div className="flex flex-col w-full max-w-7xl mx-auto items-center gap-7 pt-6 absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <h2 className="w-full font-['Poppins',Helvetica] font-normal text-[#a1c0ff] text-[40px] text-center leading-[73.6px]">
            Services
          </h2>

          <h1 className="w-full bg-gradient-to-b from-white to-[#a1c0ff] bg-clip-text text-transparent font-['Bebas_Neue',Helvetica] font-normal text-8xl text-center leading-[116px]">
            Tailored Technology Services <br/> That Drive Results
          </h1>
        </div>
      </div>
    </section>

    <AIAndServicesSection />

    
{/* <img
            src="/3d-network-communications-background-with-glowing-particles-conn.png"
            alt="Service Visual"
            className="card-image"

/> */}
{/* <section className="services-wrapper">
      <div className="hero">
        <h1>Tailored Technology Services That Drive Results</h1>
      </div>

      <div className="services-container">
        <div className="services-card">
          <div className="text">
            <h2>SGS SERVICES</h2>
            <p>
              At SGS, we engineer intelligent AI-driven solutions that help businesses lead in the digital era.
              From machine learning and data analytics to blockchain and custom software, we turn bold ideas
              into impactful, future-ready technologies.
            </p>
          </div>
      
        </div>

        <div className="accordion">
          {serviceItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-header" onClick={() => toggleItem(index)}>
                <span>{item}</span>
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </div>
              {openIndex === index && (
                <div className="accordion-body">
                  <p>
                    This is a placeholder description for <strong>{item}</strong>. You can replace it
                    with real content specific to your services.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section> */}




 {/* Footer Section */}
      <FooterByAnima />
</>

    )


    

}
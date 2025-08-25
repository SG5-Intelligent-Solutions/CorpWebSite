import { AIAndServicesSection } from "./AiandServicesSection";

export const Service = () => {
  return (
    <>
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
              Tailored Technology Services <br /> That Drive Results
            </h1>
          </div>
        </div>
      </section>
      <AIAndServicesSection />
    </>
  )
}
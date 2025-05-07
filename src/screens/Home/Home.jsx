import React from 'react'
import { Card, CardContent } from '../../components/ui/card'
import { BackgroundByAnima } from './sections/BackgroundByAnima'
import { BackgroundWrapperByAnima } from './sections/BackgroundWrapperByAnima'
import { DivByAnima } from './sections/DivByAnima'
import { DivWrapperByAnima } from './sections/DivWrapperByAnima'
import { FooterByAnima } from './sections/FooterByAnima'
import { FrameByAnima } from './sections/FrameByAnima'
import { FrameWrapperByAnima } from './sections/FrameWrapperByAnima'
import { SectionComponentNodeByAnima } from './sections/SectionComponentNodeByAnima'
import TestimonialSlider from '../../components/ui/TestimonialSlider'

export const Home = () => {
  // Services data for mapping
  const services = [
    {
      id: 1,
      title: 'AI & ML Solutions',
      image: '/rectangle-8.png',
      icon: '/group-2.png',
      iconAlt: 'Group',
      col_id: 1,
    },
    {
      id: 2,
      title: 'Data Engineering',
      image: '/rectangle-9.png',
      icon: '/ri-apps-2-ai-line.svg',
      iconAlt: 'Ri apps ai line',
      col_id: 2,
    },
    {
      id: 3,
      title: 'Blockchain Services',
      image: '/rectangle-10.png',
      icon: '/eos-icons-blockchain.svg',
      iconAlt: 'Eos icons blockchain',
      col_id: 3,
    },
    {
      id: 4,
      title: 'Software & Web Development',
      image: '/rectangle-20.png',
      icon: '/eos-icons-service-outlined.svg',
      iconAlt: 'Eos icons service',
      col_id: 1,
    },
    {
      id: 5,
      title: 'Consulting & Custom Development',
      image: '/rectangle-21.png',
      icon: '/hugeicons-blockchain-02.svg',
      iconAlt: 'Hugeicons blockchain',
      col_id: 2,
    },
    {
      id: 6,
      title: 'Managed Services',
      image: '/rectangle-22.png',
      icon: '/carbon-service-id.svg',
      iconAlt: 'Carbon service id',
      col_id: 3,
    },
  ]

  return (
    <div className="relative w-full bg-black">
      <FrameWrapperByAnima />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-end justify-start p-10">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Element network"
          src="/3d-network-communications-background-with-glowing-particles-conn.png"
        />

        <div className="relative z-10 px-8 text-start w-full lg:w-2/3">
          <h4 className="font-normal text-[#a1c0ff] [font-family:'Poppins',Helvetica] mb-6">
            Welcome to SG5.ai
          </h4>

          <div className="[font-family:'Bebas_Neue',Helvetica] text-white font-bold text-6xl tracking-[0] leading-[80px] mb-12">
            Your Partner in <br />
            Digital Transformation!
          </div>

          <div className="rounded-[20px]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white tracking-[0] leading-[25px]">
              At SG5.ai, we specialize in delivering innovative AI, ML, data
              engineering, blockchain, and bespoke software solutions that drive
              business success. Discover how our advanced technology can help
              your organization thrive.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-[87px] w-[839px] h-[839px] shadow-[0px_4px_4px_#00000040] bg-[url(/vector-9.svg)] bg-[100%_100%]">
          <div className="relative w-[834px] h-[834px] top-0.5 left-0.5 bg-[url(/vector-7.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[734px] h-[734px] top-[50px] left-[50px]"
              alt="Vector"
              src="/vector-8.svg"
            />
            <img
              className="absolute w-[729px] h-[729px] top-[53px] left-[53px]"
              alt="Vector"
              src="/vector-11.svg"
            />
            <img
              className="absolute w-[629px] h-[629px] top-[103px] left-[103px]"
              alt="Vector"
              src="/vector-6.svg"
            />
            <img
              className="absolute w-[618px] h-[618px] top-[108px] left-[108px]"
              alt="Vector"
              src="/vector-2.svg"
            />
            <img
              className="absolute w-[493px] h-[493px] top-[171px] left-[171px]"
              alt="Group"
              src="/group.png"
            />
            <img
              className="absolute w-[155px] h-[185px] top-[324px] left-[338px]"
              alt="Hh new"
              src="/hh-sg5branding-new-01-1-1.png"
            />
          </div>
        </div>
      </section>

      {/* Digital Hand Section */}
      <section className="relative w-full mt-20">
        <div className="flex flex=col lg:flex-row justify-between">
          <div className="relative w-full lg:w-1/2 h-[636px]">
           
            <video
    className="w-full h-full object-contain"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/Hand.mp4" type="video/mp4" />
  </video>
            <div className="absolute w-[514px] h-[514px] top-0 right-0 bg-[url(/vector-4.svg)] bg-[100%_100%]">
              <div className="relative w-[512px] h-[512px] top-px left-px bg-[url(/vector-5.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[450px] h-[450px] top-[31px] left-[31px]"
                  alt="Vector"
                  src="/vector-10.svg"
                />

                <img
                  className="absolute w-[447px] h-[447px] top-8 left-8"
                  alt="Vector"
                  src="/vector-1.svg"
                />

                <img
                  className="absolute w-[385px] h-[385px] top-[63px] left-[63px]"
                  alt="Vector"
                  src="/vector-3.svg"
                />

                <img
                  className="absolute w-[379px] h-[379px] top-[66px] left-[66px]"
                  alt="Vector"
                  src="/vector.svg"
                />

                <img
                  className="absolute w-[302px] h-[302px] top-[105px] left-[105px]"
                  alt="Group"
                  src="/group-1.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full lg:w-1/2 p-0 lg:p-20">
            <h1 className="text-white text-5xl">
              SG5.ai is a{' '}
              <span className="font-bold bg-gradient-to-r from-[#A1C0FF] to-[#A1C0FF] bg-clip-text text-transparent">
                forward-
                <br />
                thinking technology
                <br />
                startup{' '}
              </span>{' '}
              based in Texas.
            </h1>

            <p className="text-white text-lg lg:max-w-[600px]">
              Our mission is to empower businesses with data-driven solutions
              that enhance efficiency, optimize operations, and foster
              sustainable growth. With expertise spanning AI, blockchain, and
              custom development, we provide tailored services that meet the
              evolving needs of diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full mt-20 px-20">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[77px]">
            Tailored Technology Services<br/> That Drive Results
          </h2>
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#a1c0ff] text-base tracking-[0] leading-[27.2px]">
            SOLUTIONS
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-8 w-full lg:w-1/3">
            {services
              .filter((ser) => ser.col_id === 1)
              .map((service, index) => (
                <Card
                  key={service.id}
                  className="w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[597px] object-cover"
                      alt={`${service.title} image`}
                      src={service.image}
                    />
                    <div className="flex flex-col p-10 gap-[9px]">
                      <div className="relative w-[90px] h-[90px] bg-[#141414] rounded-[10px] overflow-hidden">
                        <div className="relative h-[90px] rounded-[10px] border border-solid border-[#191919]">
                          <img
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px]"
                            alt={service.iconAlt}
                            src={service.icon}
                          />
                        </div>
                      </div>
                      <h3 className="text-[40px] [font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] tracking-[0] leading-[46px]">
                        {service.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="flex flex-col gap-8 w-full lg:w-1/3 mt-0 lg:mt-10">
            {services
              .filter((ser) => ser.col_id === 2)
              .map((service, index) => (
                <Card
                  key={service.id}
                  className="w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[597px] object-cover"
                      alt={`${service.title} image`}
                      src={service.image}
                    />
                    <div className="flex flex-col p-10 gap-[9px]">
                      <div className="relative w-[90px] h-[90px] bg-[#141414] rounded-[10px] overflow-hidden">
                        <div className="relative h-[90px] rounded-[10px] border border-solid border-[#191919]">
                          <img
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px]"
                            alt={service.iconAlt}
                            src={service.icon}
                          />
                        </div>
                      </div>
                      <h3 className="text-[40px] [font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] tracking-[0] leading-[46px]">
                        {service.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
          <div className="flex flex-col gap-8  w-full lg:w-1/3">
            {services
              .filter((ser) => ser.col_id === 3)
              .map((service, index) => (
                <Card
                  key={service.id}
                  className="w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[597px] object-cover"
                      alt={`${service.title} image`}
                      src={service.image}
                    />
                    <div className="flex flex-col p-10 gap-[9px]">
                      <div className="relative w-[90px] h-[90px] bg-[#141414] rounded-[10px] overflow-hidden">
                        <div className="relative h-[90px] rounded-[10px] border border-solid border-[#191919]">
                          <img
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px]"
                            alt={service.iconAlt}
                            src={service.icon}
                          />
                        </div>
                      </div>
                      <h3 className="text-[40px] [font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] tracking-[0] leading-[46px]">
                        {service.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden ${index === 1 || index === 4 ? 'mt-0 lg:mt-10' : ''}`}
            // className="w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[597px] object-cover"
                  alt={`${service.title} image`}
                  src={service.image}
                />
                <div className="flex flex-col p-10 gap-[9px]">
                  <div className="relative w-[90px] h-[90px] bg-[#141414] rounded-[10px] overflow-hidden">
                    <div className="relative h-[90px] rounded-[10px] border border-solid border-[#191919]">
                      <img
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px]"
                        alt={service.iconAlt}
                        src={service.icon}
                      />
                    </div>
                  </div>
                  <h3 className="text-[40px] [font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] tracking-[0] leading-[46px]">
                    {service.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </section>

      {/* Industry Section */}
      <section className=" w-full mt-20 overflow-hidden">
        <div className="w-full max-w-[2009px] md:min-h-[70vh] mx-auto relative overflow-hidden">
          {/* Dark tech background with gradient overlay */}
          <div className="absolute inset-0 md:bg-[url('/industry-bg-2.svg')] bg-contain bg-no-repeat bg-top-right opacity-90 z-0 top-0">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div> */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3)_0%,_transparent_70%)] z-20"></div> */}
          </div>

          <div className="flex flex-row items-center justify-between px-20 py-10 z-20 relative">
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[77px]">
              Built for the <br />
              Future of Industry
            </h2>
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#a1c0ff] text-base text-right tracking-[0] leading-[27.2px]">
              Our Products
            </span>
          </div>
          <div className="flex justify-center gap-20 flex-wrap md:mt-20 mt-10">
            <BackgroundByAnima />
            <BackgroundWrapperByAnima />
            <DivWrapperByAnima />
            <DivByAnima />
            <SectionComponentNodeByAnima />
            <FrameByAnima />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full mt-20 px-20">
        <div className="flex flex-row items-center justify-between mb-10">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[77px]">
            What our customers <br />
            are saying
          </h2>
          <span className="[font-family:'Inter',Helvetica] font-medium text-[#a1c0ff] text-base text-right tracking-[0] leading-[27.2px]">
            Testimonials
          </span>
        </div>

        {/* <div className="flex flex-col w-full items-center justify-center gap-2.5">
          <img
            className="w-full max-w-[1320px] h-[235px]"
            alt="Section mask group"
            src="/section-mask-group.svg"
          />
          <img
            className="w-full max-w-[1320px] h-[235px]"
            alt="Section mask group"
            src="/section-mask-group-1.svg"
          />
        </div> */}
        <TestimonialSlider />
      </section>

      {/* Footer Section */}
      <FooterByAnima />
    </div>
  )
}

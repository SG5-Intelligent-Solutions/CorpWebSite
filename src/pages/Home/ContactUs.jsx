import React from "react";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const inputClass =
  "bg-[#9e9e9f1c] rounded-[216.17px] h-[78px] px-10 text-[25px] font-medium text-white opacity-50 placeholder:text-white placeholder:opacity-50 backdrop-blur-[96.52px] border-none relative before:content-[''] before:absolute before:inset-0 before:p-[2.16px] before:rounded-[216.17px] before:[background:linear-gradient(270deg,rgba(161,192,255,1)_0%,rgba(255,248,248,0.12)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none";

const textareaClass =
  "bg-[#9e9e9f1c] rounded-[25.94px] h-[290px] px-10 pt-5 text-[25px] font-medium text-white opacity-50 placeholder:text-white placeholder:opacity-50 backdrop-blur-[96.52px] border-none relative before:content-[''] before:absolute before:inset-0 before:p-[2.16px] before:rounded-[25.94px] before:[background:linear-gradient(270deg,rgba(161,192,255,1)_0%,rgba(255,248,248,0.12)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none";

export const Contact = () => {
  return (
    <main className="bg-black flex flex-col items-center w-full min-h-screen">
      <FrameWrapperByAnima />
      
      <div className="relative w-full flex-1">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Network communications background"
            src="/ContactUs.png"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Text Content - Centered */}
        <div className="flex flex-col w-full max-w-7xl mx-auto items-center gap-7 pt-64 relative z-10">
          <h2 className="w-full font-['Poppins',Helvetica] font-normal text-[#a1c0ff] text-[40px] text-center leading-[73.6px]">
            Contact Us
          </h2>

          <h1 className="w-full bg-gradient-to-b from-white to-[#a1c0ff] bg-clip-text text-transparent font-['Bebas_Neue',Helvetica] font-bold text-8xl text-center leading-[116px]">
            Get In Touch Now
          </h1>
        </div>

        {/* Input Section - Below Text */}
        <div className="relative z-10 w-full max-w-[936px] mx-auto mt-20 mb-32 flex flex-col gap-8 [font-family:'Poppins',Helvetica]">
          <div className="flex flex-col gap-8">
            <Input placeholder="Name" className={inputClass} />
            <Input placeholder="Contact No" className={inputClass} />
            <div className="flex gap-6">
              <Input placeholder="Date" className={inputClass} />
              <Input placeholder="Time" className={inputClass} />
            </div>
            <Textarea placeholder="Message" className={textareaClass} />
          </div>

          <Button className="h-[101px] rounded-[210.97px] bg-[#0f0f0f] border-[2.11px] border-solid border-[#191919] text-[#a1c0ff] text-[38px] font-medium flex items-center justify-center gap-4">
            <span>Schedule</span>
            <ArrowUpRightIcon className="w-[40px] h-[40px]" />
          </Button>
        </div>
      </div>

      <FooterByAnima />
    </main>
  );
};
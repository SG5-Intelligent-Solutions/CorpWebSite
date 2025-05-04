import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BackgroundByAnima = () => {
  // Data for badges to enable mapping
  const badges = [
    { text: "Efficiency", className: "w-[108px]" },
    { text: "Predictive Analytics", className: "w-[186px]" },
    { text: "Asset Lifecycle", className: "w-[150px]" },
    { text: "AI Integration", className: "w-[139px]" },
    { text: "Maintenance Optimization", className: "w-[247px]" },
  ];

  return (
    <Card className="w-full max-h-[40rem] max-w-[502px] py-6 px-6 bg-[#15182005] rounded-[10px] border-[5px] border-solid border-[#a1c0ff] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
      <CardContent className="p-0 flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="w-[60px] h-[60px] bg-[#141414] rounded-[10px] overflow-hidden border border-solid border-[#191919] flex items-center justify-center">
            <div className="w-[26px] h-[26px] bg-[url(/flszp4idrtc4roqdkjx2vqfrurg-svg.svg)] bg-[100%_100%]" />
          </div>

          <h2 className="font-['Poppins',Helvetica] font-bold text-[#a1c0ff] text-[22px] leading-[26.4px] mt-1">
            Predictive Asset Management System:
          </h2>
        </div>

        <p className="font-['Poppins',Helvetica] font-medium text-[#cbcbcb] text-lg leading-[27px] mt-4">
          Leverage predictive analytics to maximize asset lifespan, reduce
          maintenance costs, and improve operational efficiency.
        </p>

        <Separator className="bg-[#ffffff14] my-2" />

        <div className="flex flex-wrap gap-3">
          {badges.slice(0, 2).map((badge, index) => (
            <Badge
              key={index}
              className={`${badge.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-1.5 flex items-center justify-start border-none`}
            >
              {badge.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {badges.slice(2, 4).map((badge, index) => (
            <Badge
              key={index}
              className={`${badge.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-1.5 flex items-center justify-start border-none`}
            >
              {badge.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {badges.slice(4).map((badge, index) => (
            <Badge
              key={index}
              className={`${badge.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-1.5 flex items-center justify-start border-none`}
            >
              {badge.text}
            </Badge>
          ))}
        </div>

        <Separator className="bg-[#ffffff14] my-2" />

        <Button className="w-full h-12 bg-[#0f0f0f] rounded-[100px] border border-solid border-[#191919] font-['Poppins',Helvetica] font-medium text-[#a1c0ff] text-lg flex items-center justify-center gap-2">
          Book a Call
          <div className="w-8 h-8 bg-neutral-950 rounded-[50px] border border-solid border-[#191919] flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};

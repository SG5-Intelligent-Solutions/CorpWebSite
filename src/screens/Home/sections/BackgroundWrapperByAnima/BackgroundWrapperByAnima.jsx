import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BackgroundWrapperByAnima = () => {
  // Data for the tags/badges to make the code more maintainable
  const tags = [
    { text: "Predictive Analytics", className: "w-[185px]" },
    { text: "Business Intelligence", className: "w-[196px]" },
    { text: "Real-Time Insights", className: "w-[185px]" },
    { text: "Decision-Making", className: "w-[167px]" },
    { text: "Data Visualization", className: "w-[176px]" },
  ];

  return (
    <Card className="w-[502px] max-h-[40rem]  bg-[#15182005] rounded-[10px] border-[5px] border-solid border-[#a1c0ff] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
      <CardHeader className="flex flex-row items-start gap-4 pt-6 pb-0">
        <div className="w-[60px] h-[60px] bg-[#141414] rounded-[10px] overflow-hidden border border-solid border-[#191919]">
          <div className="relative w-9 h-9 top-3 left-3">
            <div className="relative w-[26px] h-[26px] top-[5px] left-[5px] bg-[url(/flszp4idrtc4roqdkjx2vqfrurg-svg.svg)] bg-[100%_100%]" />
          </div>
        </div>

        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#a1c0ff] text-[22px] tracking-[0] leading-[26.4px]">
          Data-Driven Decision Support Platform:
        </h2>
      </CardHeader>

      <CardContent className="pt-8 px-6">
        <p className="[font-family:'Poppins',Helvetica] font-medium text-[#cbcbcb] text-lg tracking-[0] leading-[27px] mb-8">
          Provide real-time insights and predictive analytics to enhance
          business decision-making processes.
        </p>

        <Separator className="bg-[#ffffff14] my-6" />

        <div className="flex flex-wrap gap-3">
          {tags.slice(0, 2).map((tag, index) => (
            <Badge
              key={index}
              className={`${tag.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none hover:bg-[#9e9e9f30]`}
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {tag.text}
              </span>
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {tags.slice(2, 4).map((tag, index) => (
            <Badge
              key={index}
              className={`${tag.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none hover:bg-[#9e9e9f30]`}
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {tag.text}
              </span>
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {tags.slice(4).map((tag, index) => (
            <Badge
              key={index}
              className={`${tag.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none hover:bg-[#9e9e9f30]`}
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {tag.text}
              </span>
            </Badge>
          ))}
        </div>

        <Separator className="bg-[#ffffff14] my-6" />
      </CardContent>

      <CardFooter>
        <Button className="w-full h-12 bg-[#0f0f0f] rounded-[100px] border border-solid border-[#191919] [font-family:'Poppins',Helvetica] font-medium text-lg text-[#a1c0ff]">
          <span className="mx-auto flex items-center gap-2">
            Book a Call
            <div className="w-8 h-8 bg-neutral-950 rounded-[50px] border border-solid border-[#191919] flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

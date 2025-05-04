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

export const SectionComponentNodeByAnima = () => {
  // Data for the tags/badges
  const tags = [
    { id: 1, text: "Blockchain" },
    { id: 2, text: "Regulatory Compliance" },
    { id: 3, text: "Process Automation" },
    { id: 4, text: "Transparency" },
    { id: 5, text: "Risk Management" },
  ];

  return (
    <Card className="relative max-h-[40rem] w-full max-w-[502px] bg-[#15182005] rounded-[10px] border-[5px] border-solid border-[#a1c0ff] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
      <CardHeader className="flex flex-row items-start gap-4 pb-0">
        <div className="w-[60px] h-[60px] bg-[#141414] rounded-[10px] overflow-hidden border border-solid border-[#191919]">
          <div className="relative w-9 h-9 top-3 left-3">
            <div className="relative w-[26px] h-[26px] top-[5px] left-[5px] bg-[url(/flszp4idrtc4roqdkjx2vqfrurg-svg.svg)] bg-[100%_100%]" />
          </div>
        </div>

        <h3 className="font-bold text-[22px] text-[#a1c0ff] [font-family:'Poppins',Helvetica] leading-[26.4px]">
          Blockchain-Based Compliance Tool:
        </h3>
      </CardHeader>

      <CardContent className="pt-6">
        <p className="font-medium text-lg text-[#cbcbcb] [font-family:'Poppins',Helvetica] leading-[27px] mb-8">
          Target aviation, logistics, and healthcare industries by streamlining
          compliance processes, improving transparency, and reducing manual
          workloads.
        </p>

        <Separator className="bg-[#ffffff14] my-6" />

        <div className="flex flex-wrap gap-3">
          {tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag.id}
              className="bg-[#9e9e9f1c] text-white font-medium text-base [font-family:'Poppins',Helvetica] leading-6 rounded-[100px] border-none backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] h-9 px-3.5 flex items-center"
            >
              {tag.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {tags.slice(2, 4).map((tag) => (
            <Badge
              key={tag.id}
              className="bg-[#9e9e9f1c] text-white font-medium text-base [font-family:'Poppins',Helvetica] leading-6 rounded-[100px] border-none backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] h-9 px-3.5 flex items-center"
            >
              {tag.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {tags.slice(4).map((tag) => (
            <Badge
              key={tag.id}
              className="bg-[#9e9e9f1c] text-white font-medium text-base [font-family:'Poppins',Helvetica] leading-6 rounded-[100px] border-none backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] h-9 px-3.5 flex items-center"
            >
              {tag.text}
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
